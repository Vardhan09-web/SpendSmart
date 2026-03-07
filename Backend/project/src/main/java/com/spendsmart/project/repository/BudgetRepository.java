package com.spendsmart.project.repository;

import com.spendsmart.project.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface BudgetRepository extends JpaRepository<Budget, Long> {

    List<Budget> findByUser_Id(Long userId);


    Optional<Budget> findByUser_IdAndCategory(Long userId, String category);


}