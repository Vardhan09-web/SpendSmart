package com.spendsmart.project.dto;

import java.time.LocalDate;

public class TransactionResponse {

    private String title;
    private Double amount;
    private String type;
    private LocalDate date;

    public TransactionResponse(){}

    public TransactionResponse(String title, Double amount, String type, LocalDate date) {
        this.title = title;
        this.amount = amount;
        this.type = type;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public Double getAmount() {
        return amount;
    }

    public String getType() {
        return type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}