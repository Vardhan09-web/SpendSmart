package com.spendsmart.project.service;

import org.springframework.stereotype.Service;
import com.spendsmart.project.repository.*;
import com.spendsmart.project.dto.BalanceDTO;

@Service
public class BalanceService {

    private final IncomeRepository incomeRepository;
    private final ExpenditureRepository expenditureRepository;

    public BalanceService(IncomeRepository incomeRepository, ExpenditureRepository expenditureRepository) {
        this.incomeRepository = incomeRepository;
        this.expenditureRepository = expenditureRepository;
    }

   public BalanceDTO getBalance(Long userId) {

    Double totalIncome = incomeRepository.getTotalIncomeByUser(userId);
    Double totalExpense = expenditureRepository.getTotalExpenseByUser(userId);

    Double balance = totalIncome - totalExpense;

    return new BalanceDTO(totalIncome, totalExpense, balance);
}
}