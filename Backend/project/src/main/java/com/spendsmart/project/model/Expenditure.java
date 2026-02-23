package com.spendsmart.project.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "expenditure")
public class Expenditure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    private Double amount;
    private LocalDate expenseDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore   // 🔥 IMPORTANT FIX
    private User user;

    // Default Constructor
    public Expenditure() {}

    // Getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getCategory() { return category; }
    public Double getAmount() { return amount; }
    public LocalDate getExpenseDate() { return expenseDate; }
    public User getUser() { return user; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setCategory(String category) { this.category = category; }
    public void setAmount(Double amount) { this.amount = amount; }
    public void setExpenseDate(LocalDate expenseDate) { this.expenseDate = expenseDate; }
    public void setUser(User user) { this.user = user; }
}