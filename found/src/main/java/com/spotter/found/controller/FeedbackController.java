package com.spotter.found.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spotter.found.dto.FeedbackDto;
import com.spotter.found.entity.Feedback;
import com.spotter.found.entity.User;
import com.spotter.found.service.FeedbackService;
import com.spotter.found.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @Autowired
    private UserService userService;

    @PostMapping("/feedback")
    public ResponseEntity<?> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        Feedback feedback = new Feedback();
        feedback.setComments(feedbackDto.getComments());
        feedback.setDatetime(feedbackDto.getDatetime());

        User user = userService.getUser(feedbackDto.getUid());
        feedback.setUser(user);
        return ResponseEntity.status(201).body(feedbackService.createFeedback(feedback));
    }

    @GetMapping("/feedback")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        return ResponseEntity.status(200).body(feedbackService.getAllFeedbacks());
    }

    @GetMapping("/feedback/{fid}")
    public ResponseEntity<?> getFeedback(@PathVariable Long fid) {
        Feedback feedback = feedbackService.getFeedback(fid);
        if (feedback == null) {
            return ResponseEntity.status(404).body("Feedback not found");
        } else {
            return ResponseEntity.status(200).body(feedback);
        }
    }

    @PutMapping("/feedback/{fid}")
    public ResponseEntity<?> updateFeedback(@PathVariable Long fid, @RequestBody FeedbackDto feedbackDto) {
        Feedback feedback = new Feedback();
        feedback.setComments(feedbackDto.getComments());
        feedback.setDatetime(feedbackDto.getDatetime());

        User user = userService.getUser(feedbackDto.getUid());
        feedback.setUser(user);
        return ResponseEntity.status(200).body(feedbackService.updateFeedback(fid, feedback));
    }

    @DeleteMapping("/feedback/{fid}")
    public void deleteFeedback(@PathVariable Long fid) {
        feedbackService.deleteFeedback(fid);
    }

}
