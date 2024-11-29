package com.spotter.found.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.spotter.found.entity.User;

@Service
public interface UserService {

    public User createUser(User user);

    public List<User> getAllUsers();

    public User getUser(Long userId);

    public User updateUser(Long userId, User user);

    public void deleteUser(Long userId);

}
