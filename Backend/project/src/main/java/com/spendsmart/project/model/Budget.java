package com.spendsmart.project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "budget")
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    private Double limitAmount;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Budget(){}

    // Getters
    public Long getId() { return id; }

    public String getCategory() { return category; }

    public Double getLimitAmount() { return limitAmount; }

    public User getUser() { return user; }

    // Setters
    public void setId(Long id) { this.id = id; }

    public void setCategory(String category) { this.category = category; }

    public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }

    public void setUser(User user) { this.user = user; }
}