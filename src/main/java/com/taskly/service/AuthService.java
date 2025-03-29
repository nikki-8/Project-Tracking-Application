package com.taskly.service;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.taskly.dto.AuthRequestDTO;
import com.taskly.dto.AuthResponseDTO;
import com.taskly.entity.User;
import com.taskly.repository.UserRepository;
import com.taskly.security.JwtUtil;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponseDTO registerUser(AuthRequestDTO request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(request.getRoles())
                .build();
        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getUsername());
        return new AuthResponseDTO(token);
    }

    public AuthResponseDTO authenticate(AuthRequestDTO request) {
        Optional<User> user = userRepository.findByUsername(request.getUsername());
        
        if (user.isPresent() && passwordEncoder.matches(request.getPassword(), user.get().getPassword())) {
            String token = jwtUtil.generateToken(user.get().getUsername());
            return new AuthResponseDTO(token);
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
