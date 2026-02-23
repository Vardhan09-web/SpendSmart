package com.spendsmart.project.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.spendsmart.project.model.User;              // ✔ Make sure this matches your User entity package
import com.spendsmart.project.model.Expenditure;       // ✔ Make sure this matches your Expenditure entity package
import com.spendsmart.project.repository.ExpenditureRepository;
import com.spendsmart.project.repository.UserRepository;

@Service
public class ExpenditureService {

    private final ExpenditureRepository expenditureRepository;
    private final UserRepository userRepository;

    public ExpenditureService(ExpenditureRepository expenditureRepository, UserRepository userRepository) {
        this.expenditureRepository = expenditureRepository;
        this.userRepository = userRepository;
    }

    public Expenditure addExpense(Long userId, Expenditure expense) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        expense.setUser(user);
        return expenditureRepository.save(expense);
    }

    public List<Expenditure> getUserExpenses(Long userId) {
        return expenditureRepository.findByUser_Id(userId);
    }

    public Expenditure updateExpense(Long userId, Long expenseId, Expenditure updatedExpense) {

        Expenditure expense = expenditureRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized action");
        }

        expense.setTitle(updatedExpense.getTitle());
        expense.setCategory(updatedExpense.getCategory());
        expense.setAmount(updatedExpense.getAmount());
        expense.setExpenseDate(updatedExpense.getExpenseDate());

        return expenditureRepository.save(expense);
    }

    public void deleteExpense(Long userId, Long expenseId) {

        Expenditure expense = expenditureRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized action");
        }

        expenditureRepository.delete(expense);
    }
}