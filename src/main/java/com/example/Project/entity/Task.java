package com.example.Project.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> keywords;
    private String description;
    private String username;
    private LocalDateTime issueDate;
    private LocalDateTime expirationDate;

    @ManyToMany
    private Set<Label> labels;

    @ManyToOne
    private User assignedUser;

    @ManyToOne
    private TaskBoard taskBoard;

}
