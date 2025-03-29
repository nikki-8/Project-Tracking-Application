package com.taskly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskly.entity.Board;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByOwnerId(Long ownerId);
}
