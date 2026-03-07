package com.spendsmart.project.controller;

import com.spendsmart.project.dto.TransactionResponse;
import com.spendsmart.project.model.Expenditure;
import com.spendsmart.project.model.Income;
import com.spendsmart.project.repository.ExpenditureRepository;
import com.spendsmart.project.repository.IncomeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private IncomeRepository incomeRepository;

    @Autowired
    private ExpenditureRepository expenditureRepository;

    @GetMapping("/recent/{userId}")
    public List<TransactionResponse> getRecentTransactions(@PathVariable Long userId) {

        List<TransactionResponse> result = new ArrayList<>();

        List<Income> incomes = incomeRepository.findByUserId(userId);
        List<Expenditure> expenses = expenditureRepository.findByUser_Id(userId);

        for (Income i : incomes) {
            result.add(new TransactionResponse(
                    i.getTitle(),
                    i.getAmount(),
                    "income",
                    i.getIncomeDate()
            ));
        }

        for (Expenditure e : expenses) {
            result.add(new TransactionResponse(
                    e.getTitle(),
                    e.getAmount(),
                    "expense",
                    e.getExpenseDate()
            ));
        }

        // Sort latest first
        result.sort((a, b) -> b.getDate().compareTo(a.getDate()));

        // Return only 5 latest
        return result.stream().limit(5).toList();
    }
}