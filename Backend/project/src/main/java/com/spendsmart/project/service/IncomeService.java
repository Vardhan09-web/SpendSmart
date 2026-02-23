package com.spendsmart.project.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.spendsmart.project.model.User;
import com.spendsmart.project.model.Income;
import com.spendsmart.project.repository.IncomeRepository;
import com.spendsmart.project.repository.UserRepository;

@Service
public class IncomeService {

    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;

    public IncomeService(IncomeRepository incomeRepository, UserRepository userRepository) {
        this.incomeRepository = incomeRepository;
        this.userRepository = userRepository;
    }

    // 🔹 Add Income
    public Income addIncome(Long userId, Income income) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        income.setUser(user);
        return incomeRepository.save(income);
    }

    // 🔹 Get All Income of a User
    public List<Income> getUserIncome(Long userId) {
        return incomeRepository.findByUserId(userId);
    }

    // 🔹 Update Income
    public Income updateIncome(Long userId, Long incomeId, Income updatedIncome) {

        Income income = incomeRepository.findById(incomeId)
                .orElseThrow(() -> new RuntimeException("Income not found"));

        if (!income.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized action");
        }

        income.setTitle(updatedIncome.getTitle());
        income.setCategory(updatedIncome.getCategory());
        income.setAmount(updatedIncome.getAmount());
        income.setIncomeDate(updatedIncome.getIncomeDate());

        return incomeRepository.save(income);
    }

    // 🔹 Delete Income
    public void deleteIncome(Long userId, Long incomeId) {

        Income income = incomeRepository.findById(incomeId)
                .orElseThrow(() -> new RuntimeException("Income not found"));

        if (!income.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized action");
        }

        incomeRepository.delete(income);
    }
}