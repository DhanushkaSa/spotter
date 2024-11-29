package com.spotter.found.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spotter.found.entity.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
    
}
