package com.spendsmart.project.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.spendsmart.project.model.User;
import com.spendsmart.project.service.UserService;
import com.spendsmart.project.repository.UserRepository;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // =========================
    // USER PROFILE APIs
    // =========================

    // GET Profile
    @GetMapping("/api/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // UPDATE Profile
    @PutMapping("/api/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    // =========================
    // AUTH APIs
    // =========================

    // REGISTER USER
    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already registered!");
        }

        if (userRepository.existsByPhone(user.getPhone())) {
            return ResponseEntity.badRequest().body("Phone number already registered!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }

    // LOGIN USER
    @PostMapping("/api/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {

        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        User user = userOptional.get();

        // Compare encrypted password
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        return ResponseEntity.ok(user);
    }
}