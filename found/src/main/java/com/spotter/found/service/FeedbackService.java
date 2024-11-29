package com.spotter.found.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spotter.found.entity.Feedback;

@Service
public interface FeedbackService {

    public Feedback createFeedback(Feedback feedback);

    public List<Feedback> getAllFeedbacks();

    public Feedback getFeedback(Long fid);

    public Feedback updateFeedback(Long fid, Feedback feedback);

    public void deleteFeedback(Long fid);

}
