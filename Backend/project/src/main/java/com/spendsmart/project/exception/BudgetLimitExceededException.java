package com.spendsmart.project.exception;

public class BudgetLimitExceededException extends RuntimeException {

    public BudgetLimitExceededException(String message) {
        super(message);
    }
}