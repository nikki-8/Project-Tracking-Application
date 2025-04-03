package com.taskly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskly.entity.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByTaskId(Long taskId);
}
