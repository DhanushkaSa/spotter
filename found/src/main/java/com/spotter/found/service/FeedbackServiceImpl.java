package com.spotter.found.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spotter.found.entity.Feedback;
import com.spotter.found.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback getFeedback(Long fid) {
        return feedbackRepository.findById(fid).orElse(null);
    }

    @Override
    public Feedback updateFeedback(Long fid, Feedback feedback) {
        Feedback updatFeedback = feedbackRepository.findById(fid).orElse(null);
        if (updatFeedback == null) {
            return null;
        } else {
            updatFeedback.setComments(feedback.getComments());
            updatFeedback.setDatetime(feedback.getDatetime());
            updatFeedback.setUser(feedback.getUser());

            return feedbackRepository.save(updatFeedback);
        }
    }

    @Override
    public void deleteFeedback(Long fid) {
        feedbackRepository.deleteById(fid);
    }

}
