package com.example.demo.service;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
  
	@Autowired
    private  UserRepository repo;

	@Override
	public UserDetails loadUserByUsername(String email) {
	    User user = repo.findByEmail(email);

	    return org.springframework.security.core.userdetails.User
	            .withUsername(user.getEmail())
	            .password(user.getPassword())  // ✅ encrypted password
	            //.authorities(user.getRole().name())  // ✅ role
	            .authorities(user.getRole())
	            .build();
	}

}
