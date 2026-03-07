package com.spendsmart.project.dto;

public class BudgetResponse {

    private String category;
    private Double limitAmount;
    private Double spent;
    private Double remaining;
    private Double percentage;

    public BudgetResponse(){}

    public String getCategory() { return category; }

    public Double getLimitAmount() { return limitAmount; }

    public Double getSpent() { return spent; }

    public Double getRemaining() { return remaining; }

    public Double getPercentage() { return percentage; }

    public void setCategory(String category) { this.category = category; }

    public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }

    public void setSpent(Double spent) { this.spent = spent; }

    public void setRemaining(Double remaining) { this.remaining = remaining; }

    public void setPercentage(Double percentage) { this.percentage = percentage; }
}