// package com.spendsmart.project.controller;

// import com.spendsmart.project.service.BudgetService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @CrossOrigin(origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/api/budget")
// public class BudgetController {

//     @Autowired
//     private BudgetService budgetService;

//     @GetMapping("/{userId}")
//     public Object getBudget(@PathVariable Long userId){

//         return budgetService.getBudgetOverview(userId);

//     }
// }

package com.spendsmart.project.controller;

import com.spendsmart.project.dto.BudgetRequest;
import com.spendsmart.project.model.Budget;
import com.spendsmart.project.model.User;
import com.spendsmart.project.repository.BudgetRepository;
import com.spendsmart.project.repository.UserRepository;
import com.spendsmart.project.service.BudgetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BudgetService budgetService;


    // GET budgets (already used by dashboard)

    @GetMapping("/{userId}")
    public List<?> getBudgets(@PathVariable Long userId) {

        return budgetService.getBudgetOverview(userId);
    }


    // POST add new budget
    @PostMapping
public Budget addOrUpdateBudget(@RequestBody BudgetRequest request) {

    User user = userRepository.findById(request.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found"));

    // Check if category already exists
    Budget budget = budgetRepository
            .findByUser_IdAndCategory(request.getUserId(), request.getCategory())
            .orElse(null);

    if (budget == null) {
        // create new budget
        budget = new Budget();
        budget.setCategory(request.getCategory());
        budget.setUser(user);
    }

    // update limit
    budget.setLimitAmount(request.getLimitAmount());

    return budgetRepository.save(budget);
}
}