package com.spotter.found.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.spotter.found.entity.User;
import com.spotter.found.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public User updateUser(Long userId, User user) {
        User updateUser = userRepository.findById(userId).orElse(null);
        if (updateUser == null) {
            return null;
        } else {
            updateUser.setName(user.getName());
            updateUser.setEmail(user.getEmail());
            updateUser.setPhone(user.getPhone());
            updateUser.setPassword(user.getPassword());

            return userRepository.save(updateUser);
        }
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

}
