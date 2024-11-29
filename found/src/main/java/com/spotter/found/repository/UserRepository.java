package com.spotter.found.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spotter.found.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    
}
