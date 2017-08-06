package com.project.login.registration;

import java.util.HashSet;
import java.util.Set;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.login.model.Registration;
import com.project.login.model.UserRegistrationResponse;

/**
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/registration")
public class RegistrationController {

	private static final Set<String> userIds = new HashSet<>();

	@RequestMapping(value = "/validateUser", method = RequestMethod.POST)
	public UserRegistrationResponse validateUser(@RequestBody Registration registration) {

		final String userId = registration.getUserId();
		if (userIds.contains(userId)) {
			return new UserRegistrationResponse("FAILED", 0,
					"The provided User Id is already in use. Please provide a different one");
		}
		userIds.add(userId);
		return new UserRegistrationResponse("SUCCESS", 1,
				"Congratulation! User registration is successful. Please proceed with login");
	}
}
