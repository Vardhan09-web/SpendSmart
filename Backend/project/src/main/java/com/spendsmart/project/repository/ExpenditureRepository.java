package com.spendsmart.project.repository;

import com.spendsmart.project.model.Expenditure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Long> {

    List<Expenditure> findByUser_Id(Long userId);

    List<Expenditure> findByUser_IdAndExpenseDateBetween(
            Long userId,
            LocalDate start,
            LocalDate end
    );

    @Query("SELECT COALESCE(SUM(e.amount), 0) FROM Expenditure e WHERE e.user.id = :userId")
    Double getTotalExpenseByUser(@Param("userId") Long userId);

      @Query("""
   SELECT COALESCE(SUM(e.amount),0)
   FROM Expenditure e
   WHERE e.user.id = :userId
   AND e.category = :category
   """)
   Double getExpenseByCategory(
         @Param("userId") Long userId,
         @Param("category") String category
   );

   // 🔹 FILTER FOR REPORT PAGE
    @Query("""
    SELECT e
    FROM Expenditure e
    WHERE e.user.id = :userId
    AND (:category IS NULL OR e.category = :category)
    AND (:month IS NULL OR FUNCTION('MONTH', e.expenseDate) = :month)
    AND (:year IS NULL OR FUNCTION('YEAR', e.expenseDate) = :year)
    """)
    List<Expenditure> filterReports(
            @Param("userId") Long userId,
            @Param("month") Integer month,
            @Param("year") Integer year,
            @Param("category") String category
    );
    
}