package com.spendsmart.project.controller;


import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.spendsmart.project.model.Income;
import com.spendsmart.project.service.IncomeService;

@RestController
@RequestMapping("/api/income")
@CrossOrigin
public class IncomeController {

    private final IncomeService incomeService;

    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
    }

    // Add Income
    @PostMapping("/{userId}")
    public Income addIncome(@PathVariable Long userId, @RequestBody Income income) {
        return incomeService.addIncome(userId, income);
    }

    // Get User Income
    @GetMapping("/{userId}")
    public List<Income> getUserIncome(@PathVariable Long userId) {
        return incomeService.getUserIncome(userId);
    }

    // Update Income
    @PutMapping("/{userId}/{incomeId}")
    public Income updateIncome(@PathVariable Long userId,
                            @PathVariable Long incomeId,
                            @RequestBody Income income) {
        return incomeService.updateIncome(userId, incomeId, income);
    }


    // Delete Income
    @DeleteMapping("/{userId}/{incomeId}")
    public String deleteIncome(@PathVariable Long userId,
                            @PathVariable Long incomeId) {

        incomeService.deleteIncome(userId, incomeId);
        return "Income deleted successfully";
    }
}
