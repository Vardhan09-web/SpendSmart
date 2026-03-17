package com.spendsmart.project.service;

import com.spendsmart.project.model.Expenditure;
import com.spendsmart.project.repository.ExpenditureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final ExpenditureRepository repository;

    public ReportService(ExpenditureRepository repository) {
        this.repository = repository;
    }

    public List<Expenditure> getFilteredReports(Long userId, Integer month, Integer year, String category) {

        if (category != null && category.isEmpty()) {
            category = null;
        }

        return repository.filterReports(userId, month, year, category);
    }
}