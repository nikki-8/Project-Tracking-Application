package com.taskly.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.taskly.dto.BoardDTO;
import com.taskly.service.BoardService;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/boards")
@AllArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<List<BoardDTO>> getBoardsByOwner(@PathVariable Long ownerId) {
        return ResponseEntity.ok(boardService.getBoardsByOwner(ownerId));
    }
}
