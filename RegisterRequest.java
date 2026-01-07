package com.example.demo.payload;
import com.example.demo.entity.Role;

import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String contact;
    private String city;
    private String password;
    private String role;   // ADMIN or USER

	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public void setRole(String role) {
		this.role = role;
	}
	public String getRole() {
		return role;
	}
	public String getName() {
		// TODO Auto-generated method stub
		return null;
	}
	

}

