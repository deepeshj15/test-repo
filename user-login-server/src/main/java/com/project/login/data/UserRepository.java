package com.project.login.data;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.project.login.model.Login;
import com.project.login.model.Registration;

@Repository
public class UserRepository {

	private static final Map<String, Registration> registeredUsers = new HashMap<>();

	public boolean checkIfUserExist(final String userId) {

		return registeredUsers.containsKey(userId);
	}

	public int createUser(final Registration registration) {

		final String userId = registration.getUserId();
		final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		final String hashedPassword = passwordEncoder.encode(registration.getPassword());
		registration.setPassword(hashedPassword);
		registeredUsers.put(userId, registration);
		return checkIfUserExist(userId) ? 1 : 0;
	}

	public boolean isValidUserPassword(final Login login) {

		final Registration registration = registeredUsers.get(login.getUserId());
		return registration != null && registration.getPassword().equals(login.getPassword());
	}

	public Registration findUserByUserId(final String userId) {

		final Registration registration = registeredUsers.get(userId);
		return registration;
	}
}
