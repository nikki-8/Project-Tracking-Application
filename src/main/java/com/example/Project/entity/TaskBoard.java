package com.example.Project.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
public class TaskBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "taskboard")
    private List<Task>tasks;

    @Transient
    private String sortBy;//date/id/username/group

    @Transient
    private String sortOrder;//asc/desc

    @Transient
    private String searchTerm;//date/id/description
}
