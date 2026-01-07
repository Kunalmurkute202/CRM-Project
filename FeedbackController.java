package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin("*")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;
	
	 @GetMapping
	    public ResponseEntity<List<Feedback>> getAllFeedback() {
	        List<Feedback> list = feedbackService.getAllFeedback();
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }

	    // ✔ Add new feedback
	    @PostMapping
	    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
	        Feedback savedFeedback = feedbackService.addFeedback(feedback);
	        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
	    }
	
}
