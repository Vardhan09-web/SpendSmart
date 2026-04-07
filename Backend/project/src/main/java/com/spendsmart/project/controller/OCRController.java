package com.spendsmart.project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.spendsmart.project.service.OCRService;

import java.util.Map;

@RestController
@RequestMapping("/ocr")
@CrossOrigin
public class OCRController {

    @Autowired
    private OCRService ocrService;

    @PostMapping
    public Map<String, String> scanReceipt(@RequestParam("file") MultipartFile file) {
        return ocrService.processImage(file);
    }
}