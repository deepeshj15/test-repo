package com.project.login.repository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.project.login.model.AppUser;
import com.project.login.model.Login;
import com.project.login.model.Registration;

@Repository
public class UserRepository {

	private static final Map<String, AppUser> applicationUsers = new HashMap<>();

	private boolean checkIfUserExist(final String userId) {
		return applicationUsers.containsKey(userId);
	}

	private int createUser(final Registration registration) {

		final String userId = registration.getUserId();
		final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		final String hashedPassword = passwordEncoder.encode(registration.getPassword());
		final AppUser user = new AppUser(registration.getUserId(), hashedPassword, registration.getEmail(),
				registration.getUserName(), registration.getCity(), registration.getBirthdate(),
				registration.getSecretQuestion(), registration.getSecretAnswer());

		applicationUsers.put(userId, user);
		return checkIfUserExist(userId) ? 1 : 0;
	}

	private boolean isValidUserPassword(final Login login) {
		final AppUser user = applicationUsers.get(login.getUserId());
		return user != null && user.getPassword().equals(login.getPassword());
	}

	private AppUser findUserByUserId(final String userId) {
		final AppUser user = applicationUsers.get(userId);
		return user;
	}
}
