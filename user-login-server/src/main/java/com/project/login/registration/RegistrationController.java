/**
 * 
 */
package com.project.login.registration;

import java.util.HashSet;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping(value = "/validateUser", method = RequestMethod.GET)
	public UserRegistrationResponse validateUser(
			@RequestBody @PathVariable("registration") final Registration registration) {

		//if (userIds.contains(userId)) {
			//return new UserRegistrationResponse("FAILED", 0,
					//"The provided User Id is already in use. Please provide a different one");
		//}
		//userIds.add(userId);
		return new UserRegistrationResponse("SUCCESS", 1,
				"Congratulation! User registration is successful. Please proceed with login");
	}
}
