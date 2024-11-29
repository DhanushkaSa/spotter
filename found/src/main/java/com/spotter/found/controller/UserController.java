package com.spotter.found.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spotter.found.entity.User;
import com.spotter.found.service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (user.getName() == null || user.getName().isEmpty() ||
                user.getEmail() == null || user.getEmail().isEmpty() ||
                user.getPhone() == null) {
            return ResponseEntity.status(400).body("User details are not complete");
        } else {
            return ResponseEntity.status(201).body(userService.createUser(user));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.status(200).body(userService.getAllUsers());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Long userId) {
        User user = userService.getUser(userId);
        if (user == null) {
            return ResponseEntity.status(404).body("User not found");
        } else {
            return ResponseEntity.status(200).body(user);
        }
    }

    @PutMapping("/user/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody User user) {
        if (user.getName() == "" || user.getEmail() == "" || user.getPhone() == null) {
            return ResponseEntity.status(404).body("User details are not complete");
        } else {
            return ResponseEntity.status(200).body(userService.updateUser(userId, user));
        }
    }

    @DeleteMapping("/user/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }
}
