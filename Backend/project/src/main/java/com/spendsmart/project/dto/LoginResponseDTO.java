    package com.spendsmart.project.dto;

    public class LoginResponseDTO {

        private Long id;
        private String name;
        private String email;

        // Constructor
        public LoginResponseDTO(Long id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        // Getters (VERY IMPORTANT for JSON)
        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }
    }