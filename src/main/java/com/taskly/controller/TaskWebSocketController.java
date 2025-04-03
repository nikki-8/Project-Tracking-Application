package com.taskly.controller;

import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import com.taskly.dto.TaskDTO;

@RestController
@AllArgsConstructor
public class TaskWebSocketController {

    @MessageMapping("/task-update")
    @SendTo("/topic/tasks")
    public TaskDTO updateTask(TaskDTO task) {
        return task;
    }
}
