package com.project.login.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "app_user")
public class AppUser implements Serializable {

	/** */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "userId", nullable = false)
	private String userId;
	@Column(name = "password", nullable = false)
	private String password;
	@Column(name = "email", nullable = false)
	private String email;
	private String userName;
	private String city;
	private Date birthdate;
	@Column(name = "secretQuestion", nullable = false)
	private String secretQuestion;
	@Column(name = "secretAnswer", nullable = false)
	private String secretAnswer;
	
	public AppUser() {
		super();
	}

	public AppUser(final String userId, final String password, final String email, final String userName,
			final String city, final Date birthdate, final String secretQuestion, final String secretAnswer) {

		super();
		this.userId = userId;
		this.password = password;
		this.userName = userName;
		this.email = email;
		this.city = city;
		this.birthdate = birthdate;
		this.secretQuestion = secretQuestion;
		this.secretAnswer = secretAnswer;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getSecretQuestion() {
		return secretQuestion;
	}

	public void setSecretQuestion(String secretQuestion) {
		this.secretQuestion = secretQuestion;
	}

	public String getSecretAnswer() {
		return secretAnswer;
	}

	public void setSecretAnswer(String secretAnswer) {
		this.secretAnswer = secretAnswer;
	}
}
