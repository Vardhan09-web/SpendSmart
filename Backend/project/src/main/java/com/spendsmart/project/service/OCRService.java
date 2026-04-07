package com.spendsmart.project.service;

import net.sourceforge.tess4j.Tesseract;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.*;

@Service
public class OCRService {

    public Map<String, String> processImage(MultipartFile file) {
        Map<String, String> result = new HashMap<>();

        try {
            // Save file temporarily
            File convFile = File.createTempFile("receipt", ".jpg");
            file.transferTo(convFile);

            // Setup Tesseract
            Tesseract tesseract = new Tesseract();
            tesseract.setDatapath("C:/Program Files/Tesseract-OCR/tessdata");
            tesseract.setLanguage("eng");

            // Extract text
            String text = tesseract.doOCR(convFile);

            // Clean text
            text = text.replaceAll("[^\\x00-\\x7F]", "");

            System.out.println("OCR TEXT:\n" + text);

            // Parse data
            result.put("amount", extractAmount(text));
            result.put("date", extractDate(text));
            result.put("category", extractCategory(text));

            convFile.delete();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    /* ---------------- AMOUNT ---------------- */

    private String extractAmount(String text) {
        Pattern pattern = Pattern.compile("(\\d+[.,]\\d{2})");
        Matcher matcher = pattern.matcher(text);

        double maxAmount = 0;

        while (matcher.find()) {
            try {
                String valueStr = matcher.group().replace(",", ".");
                double value = Double.parseDouble(valueStr);

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

        if (text.contains("restaurant") || text.contains("food") || text.contains("cafe")) {
            return "Food & Dining";
        } else if (text.contains("uber") || text.contains("ola") || text.contains("fuel") || text.contains("petrol")) {
            return "Transportation";
        } else if (text.contains("amazon") || text.contains("flipkart") || text.contains("shopping")) {
            return "Shopping";
        } else if (text.contains("electricity") || text.contains("water") || text.contains("bill")) {
            return "Utilities";
        }

        return "Shopping";
    }
}