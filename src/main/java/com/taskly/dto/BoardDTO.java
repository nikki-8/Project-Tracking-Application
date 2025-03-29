package com.taskly.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardDTO {
    private Long id;
    private String name;
    private Long ownerId;
}