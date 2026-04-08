package com.spendsmart.project.service;

import net.sourceforge.tess4j.Tesseract;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.*;

import javax.imageio.ImageIO;

@Service
public class OCRService {
        public Map<String, String> processImage(MultipartFile file) {
        Map<String, String> result = new HashMap<>();

        try {
            // Setup Tesseract
            Tesseract tesseract = new Tesseract();
            tesseract.setDatapath("C:/Program Files/Tesseract-OCR/tessdata");
            tesseract.setLanguage("eng");

            // ✅ NEW CODE (PNG + JPG SUPPORT)
            BufferedImage image = ImageIO.read(file.getInputStream());
            String text = tesseract.doOCR(image);

            // Clean text
            text = text.replaceAll("[^\\x00-\\x7F]", "");

            System.out.println("OCR TEXT:\n" + text);

            // Parse data
            result.put("amount", extractAmount(text));
            result.put("date", extractDate(text));
            result.put("category", extractCategory(text));

        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    /* ---------------- AMOUNT ---------------- */

    private String extractAmount(String text) {

        // 🔥 1. GRAND TOTAL (highest priority)
        Pattern grandPattern = Pattern.compile("(grand total)[^\\d]*(\\d+[.,]\\d{2})", Pattern.CASE_INSENSITIVE);
        Matcher grandMatcher = grandPattern.matcher(text);

        if (grandMatcher.find()) {
            return grandMatcher.group(2).replace(",", ".");
        }

        // 🔥 2. TOTAL (but avoid subtotal)
        Pattern totalPattern = Pattern.compile("(?<!sub)(total)[^\\d]*(\\d+[.,]\\d{2})", Pattern.CASE_INSENSITIVE);
        Matcher totalMatcher = totalPattern.matcher(text);

        if (totalMatcher.find()) {
            return totalMatcher.group(2).replace(",", ".");
        }

        // 🔥 3. Fallback → max value
        Pattern pattern = Pattern.compile("(\\d+[.,]\\d{2})");
        Matcher matcher = pattern.matcher(text);

        double maxAmount = 0;

        while (matcher.find()) {
            try {
                double value = Double.parseDouble(matcher.group().replace(",", "."));
                if (value > maxAmount) {
                    maxAmount = value;
                }
            } catch (Exception ignored) {}
        }

        return maxAmount > 0 ? String.valueOf(maxAmount) : "";
    }
    /* ---------------- DATE ---------------- */

    private String extractDate(String text) {

        // 1. Numeric formats
        String[] patterns = {
            "(\\d{2}/\\d{2}/\\d{4})",
            "(\\d{2}-\\d{2}-\\d{4})",
            "(\\d{4}-\\d{2}-\\d{2})"
        };

        for (String p : patterns) {
            Matcher matcher = Pattern.compile(p).matcher(text);
            if (matcher.find()) {
                return convertToYYYYMMDD(matcher.group());
            }
        }

        // 2. Month format (September 06, 2023)
        Pattern monthPattern = Pattern.compile(
            "(January|February|March|April|May|June|July|August|September|October|November|December)\\s+(\\d{2}),\\s+(\\d{4})",
            Pattern.CASE_INSENSITIVE
        );

        Matcher monthMatcher = monthPattern.matcher(text);

        if (monthMatcher.find()) {
            String monthName = monthMatcher.group(1);
            String day = monthMatcher.group(2);
            String year = monthMatcher.group(3);

            String month = getMonthNumber(monthName);

            return year + "-" + month + "-" + day;
        }

        return "";
    }

    private String convertToYYYYMMDD(String date) {

        if (date.matches("\\d{4}-\\d{2}-\\d{2}")) {
            return date;
        }

        date = date.replace("-", "/");

        String[] parts = date.split("/");

        return parts[2] + "-" + parts[1] + "-" + parts[0];
    }

    private String getMonthNumber(String month) {
        switch (month.toLowerCase()) {
            case "january": return "01";
            case "february": return "02";
            case "march": return "03";
            case "april": return "04";
            case "may": return "05";
            case "june": return "06";
            case "july": return "07";
            case "august": return "08";
            case "september": return "09";
            case "october": return "10";
            case "november": return "11";
            case "december": return "12";
        }
        return "01";
    }

    /* ---------------- CATEGORY ---------------- */

private String extractCategory(String text) {
    text = text.toLowerCase();

    // 🍔 FOOD & DINING
    if (
        text.contains("restaurant") || text.contains("food") || text.contains("cafe") ||
        text.contains("dine") || text.contains("hotel") || text.contains("meal") ||
        text.contains("menu") || text.contains("pizza") || text.contains("burger") ||
        text.contains("chicken") || text.contains("drink") || text.contains("beverage") ||
        text.contains("bakery") || text.contains("coffee") || text.contains("tea")
    ) {
        return "Food & Dining";
    }

    // 🚗 TRANSPORTATION
    else if (
        text.contains("uber") || text.contains("ola") || text.contains("fuel") ||
        text.contains("petrol") || text.contains("diesel") || text.contains("taxi") ||
        text.contains("ride") || text.contains("bus") || text.contains("train") ||
        text.contains("metro") || text.contains("transport") || text.contains("travel") ||
        text.contains("ticket") || text.contains("parking") || text.contains("toll")
    ) {
        return "Transportation";
    }

    // 🛍️ SHOPPING (IMPORTANT FOR YOUR RECEIPT)
    else if (
        text.contains("shopping") || text.contains("store") || text.contains("shop") ||
        text.contains("mall") || text.contains("purchase") || text.contains("item") ||
        text.contains("product") || text.contains("clothing") || text.contains("shirt") ||
        text.contains("t-shirt") || text.contains("pants") || text.contains("jeans") ||
        text.contains("socks") || text.contains("fashion") || text.contains("apparel") ||
        text.contains("flipkart") || text.contains("amazon") || text.contains("retail")
    ) {
        return "Shopping";
    }

    // 💡 UTILITIES
    else if (
        text.contains("electricity") || text.contains("water") || text.contains("bill") ||
        text.contains("utility") || text.contains("gas") || text.contains("internet") ||
        text.contains("wifi") || text.contains("broadband") || text.contains("recharge") ||
        text.contains("mobile") || text.contains("postpaid") || text.contains("prepaid") ||
        text.contains("dth") || text.contains("subscription") || text.contains("service")
    ) {
        return "Utilities";
    }

    // 🏠 RENT / HOUSING (optional but useful)
    else if (
        text.contains("rent") || text.contains("house") || text.contains("apartment") ||
        text.contains("flat") || text.contains("room") || text.contains("lease") ||
        text.contains("property") || text.contains("maintenance") || text.contains("housing") ||
        text.contains("owner")
    ) {
        return "Rent";
    }

    return "Others";
 }
}