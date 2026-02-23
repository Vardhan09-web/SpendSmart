package com.spendsmart.project.controller;

import org.springframework.web.bind.annotation.*;
import com.spendsmart.project.dto.BalanceDTO;
import com.spendsmart.project.service.BalanceService;

@RestController
@RequestMapping("/api/balance")
@CrossOrigin
public class BalanceController {

    private final BalanceService balanceService;

    public BalanceController(BalanceService balanceService) {
        this.balanceService = balanceService;
    }

    // Get User Balance
    @GetMapping("/{userId}")
    public BalanceDTO getUserBalance(@PathVariable Long userId) {
        return balanceService.getBalance(userId);
    }
}