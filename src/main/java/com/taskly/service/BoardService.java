package com.taskly.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.taskly.dto.BoardDTO;
import com.taskly.repository.BoardRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public List<BoardDTO> getBoardsByOwner(Long ownerId) {
        return boardRepository.findByOwnerId(ownerId)
                .stream()
                .map(board -> BoardDTO.builder()
                        .id(board.getId())
                        .name(board.getName())
                        .ownerId(board.getOwner().getId())
                        .build())
                .collect(Collectors.toList());
    }
}