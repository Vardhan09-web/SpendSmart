package com.spendsmart.project.service;

import com.spendsmart.project.dto.BudgetResponse;
import com.spendsmart.project.model.Budget;
import com.spendsmart.project.repository.BudgetRepository;
import com.spendsmart.project.repository.ExpenditureRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private ExpenditureRepository expenditureRepository;

    public List<BudgetResponse> getBudgetOverview(Long userId){

        List<Budget> budgets = budgetRepository.findByUser_Id(userId);

        List<BudgetResponse> result = new ArrayList<>();

        for(Budget budget : budgets){

            Double spent = expenditureRepository.getExpenseByCategory(
                    userId,
                    budget.getCategory()
            );

            Double remaining = budget.getLimitAmount() - spent;

            Double percent = (spent / budget.getLimitAmount()) * 100;

            BudgetResponse dto = new BudgetResponse();

            dto.setCategory(budget.getCategory());
            dto.setLimitAmount(budget.getLimitAmount());
            dto.setSpent(spent);
            dto.setRemaining(remaining);
            dto.setPercentage(percent);

            result.add(dto);
        }

        return result;
    }
}