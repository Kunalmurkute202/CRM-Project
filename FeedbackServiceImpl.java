package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private FeedbackRepository repo;

	@Override
	public List<Feedback> getAllFeedback() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Feedback addFeedback(Feedback feedback) {
		// TODO Auto-generated method stub
		return repo.save(feedback);
	}
	

}
