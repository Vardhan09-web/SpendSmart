    package com.spendsmart.project.model;

    import jakarta.persistence.*;
    import java.util.List;
    import com.fasterxml.jackson.annotation.JsonIgnore;

    @Entity
    @Table(name = "users")
    public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String name;

        @Column(nullable = false, unique = true)
        private String email;

        @Column(nullable = false, unique = true)
        private String phone;

        @Column(nullable = false)
        private String role;

        @Column(nullable = false)
        private String password;

        private boolean termsAccepted;

        // 🔥 FIXED HERE
        @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
        @JsonIgnore
        private List<Income> incomes;

        // 🔥 FIXED HERE
        @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
        @JsonIgnore
        private List<Expenditure> expenditures;

        public User() {}

        public User(Long id, String name, String email, String phone,
                    String role, String password, boolean termsAccepted) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.role = role;
            this.password = password;
            this.termsAccepted = termsAccepted;
        }

        // Getters
        public Long getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getPhone() { return phone; }
        public String getRole() { return role; }
        public String getPassword() { return password; }
        public boolean isTermsAccepted() { return termsAccepted; }

        public List<Income> getIncomes() { return incomes; }
        public List<Expenditure> getExpenditures() { return expenditures; }

        // Setters
        public void setId(Long id) { this.id = id; }
        public void setName(String name) { this.name = name; }
        public void setEmail(String email) { this.email = email; }
        public void setPhone(String phone) { this.phone = phone; }
        public void setRole(String role) { this.role = role; }
        public void setPassword(String password) { this.password = password; }
        public void setTermsAccepted(boolean termsAccepted) { this.termsAccepted = termsAccepted; }
        public void setIncomes(List<Income> incomes) { this.incomes = incomes; }
        public void setExpenditures(List<Expenditure> expenditures) { this.expenditures = expenditures; }
    }