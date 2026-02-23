package com.spendsmart.project.repository;

import com.spendsmart.project.model.Expenditure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Long> {

    /* =========================================================
       1️⃣ Get all expenses of a user
    ========================================================= */
    List<Expenditure> findByUser_Id(Long userId);

    /* =========================================================
       2️⃣ Get expenses of a user between dates
    ========================================================= */
    List<Expenditure> findByUser_IdAndExpenseDateBetween(
            Long userId,
            LocalDate start,
            LocalDate end
    );

    /* =========================================================
       3️⃣ Get total expense of a user (SUM)
    ========================================================= */
    @Query("SELECT COALESCE(SUM(e.amount), 0) FROM Expenditure e WHERE e.user.id = :userId")
    Double getTotalExpenseByUser(@Param("userId") Long userId);
}