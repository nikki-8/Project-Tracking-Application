package com.taskly.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.taskly.dto.UserDTO;
import com.taskly.repository.UserRepository;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(user -> UserDTO.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .email(user.getEmail())
                        .build())
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}