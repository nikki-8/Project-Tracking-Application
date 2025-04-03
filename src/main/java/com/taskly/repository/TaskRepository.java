package com.taskly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskly.entity.Task;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByColumnId(Long columnId);
    List<Task> findByAssigneeId(Long assigneeId);
}
