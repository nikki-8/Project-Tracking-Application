package com.taskly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskly.entity.KanbanColumn;

import java.util.List;

public interface ColumnRepository extends JpaRepository<KanbanColumn, Long> {
    List<KanbanColumn> findByBoardIdOrderByPosition(Long boardId);
}
