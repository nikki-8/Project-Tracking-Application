package com.taskly.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
public class TaskDTO {
    private Long id;
    private String title;
    private String description;
    private String status;
    private Long columnId;
    private Long assigneeId;
    private LocalDateTime createdAt;
}