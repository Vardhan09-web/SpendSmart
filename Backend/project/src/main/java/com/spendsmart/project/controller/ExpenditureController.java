package com.spendsmart.project.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.spendsmart.project.model.Expenditure;
import com.spendsmart.project.service.ExpenditureService;

@RestController
@RequestMapping("/api/expenditure")
@CrossOrigin
public class ExpenditureController {

    private final ExpenditureService expenditureService;

    public ExpenditureController(ExpenditureService expenditureService) {
        this.expenditureService = expenditureService;
    }

    // Add Expense
    @PostMapping("/{userId}")
    public Expenditure addExpense(@PathVariable Long userId, @RequestBody Expenditure expense) {
        return expenditureService.addExpense(userId, expense);
    }

    // Get User Expenses
    @GetMapping("/{userId}")
    public List<Expenditure> getUserExpenses(@PathVariable Long userId) {
        return expenditureService.getUserExpenses(userId);
    }

    // Update Expense
    @PutMapping("/{userId}/{expenseId}")
    public Expenditure updateExpense(@PathVariable Long userId, @PathVariable Long expenseId,  @RequestBody Expenditure expense) {
        return expenditureService.updateExpense(userId, expenseId, expense);
    }

    // Delete Expense
    @DeleteMapping("/{userId}/{expenseId}")
    public String deleteExpense(@PathVariable Long userId, @PathVariable Long expenseId) {

        expenditureService.deleteExpense(userId, expenseId);
        return "Expense deleted successfully";
    }

    // REPORT FILTER API (for Apply Filter button)
    @GetMapping("/reports/filter")
    public List<Expenditure> filterReports(
            @RequestParam Long userId,
            @RequestParam(required = false) Integer month,
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) String category) {

        return expenditureService.filterReports(userId, month, year, category);
    }
}
