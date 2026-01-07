package com.example.demo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="emails_log")
@Data
public class EmailLog {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String toEmail;
private String subject;
@Column(length = 5000)
private String body;

private String status;
private String module;

private LocalDateTime sentAt = LocalDateTime.now();

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getToEmail() {
	return toEmail;
}

public void setToEmail(String toEmail) {
	this.toEmail = toEmail;
}

public String getSubject() {
	return subject;
}

public void setSubject(String subject) {
	this.subject = subject;
}

public String getBody() {
	return body;
}

public void setBody(String body) {
	this.body = body;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public String getModule() {
	return module;
}

public void setModule(String module) {
	this.module = module;
}

public LocalDateTime getSentAt() {
	return sentAt;
}

public void setSentAt(LocalDateTime sentAt) {
	this.sentAt = sentAt;
}


}
