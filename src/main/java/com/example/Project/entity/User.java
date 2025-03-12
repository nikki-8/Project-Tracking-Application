package com.example.Project.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String formalName;
    private String username;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role designation;

    @OneToMany(mappedBy = "assignedUser")
    private List<Task> assignedTasks;

    @ManyToMany
    private Set<User> accessibleUsers; // For Dev permissions
}