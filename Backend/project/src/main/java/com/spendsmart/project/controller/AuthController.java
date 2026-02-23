package com.spendsmart.project.controller;

import com.spendsmart.project.model.User;
import com.spendsmart.project.repository.UserRepository;
import com.spendsmart.project.dto.LoginResponseDTO;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /* ================= REGISTER ================= */

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        // ✅ Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    /* ================= LOGIN ================= */

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody User loginRequest) {

        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent() &&
            passwordEncoder.matches(loginRequest.getPassword(),
                                    user.get().getPassword())) {

            return new LoginResponseDTO(
                    user.get().getId(),
                    user.get().getName(),
                    user.get().getEmail()
            );

        } else {
            throw new RuntimeException("Invalid Email or Password");
        }
    }
}