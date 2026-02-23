package com.spendsmart.project.model;

import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    private Double amount;
    private LocalDate incomeDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 🔹 Default Constructor
    public Income() {}

    // 🔹 Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCategory() {
        return category;
    }

    public Double getAmount() {
        return amount;
    }

    public LocalDate getIncomeDate() {
        return incomeDate;
    }

    public User getUser() {
        return user;
    }

    // 🔹 Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setIncomeDate(LocalDate incomeDate) {
        this.incomeDate = incomeDate;
    }

    public void setUser(User user) {
        this.user = user;
    }
}