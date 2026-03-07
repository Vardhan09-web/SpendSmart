package com.spendsmart.project.dto;

public class BudgetRequest {

    private String category;
    private Double limitAmount;
    private Long userId;

    public BudgetRequest(){}

    public String getCategory() {
        return category;
    }

    public Double getLimitAmount() {
        return limitAmount;
    }

    public Long getUserId() {
        return userId;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setLimitAmount(Double limitAmount) {
        this.limitAmount = limitAmount;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}