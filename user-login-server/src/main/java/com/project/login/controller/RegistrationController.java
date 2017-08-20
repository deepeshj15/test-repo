package com.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.project.login.model.Registration;
import com.project.login.service.AppUserDetailsService;
import com.project.login.model.AppResponse;

/**
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/registration")
public class RegistrationController {

	@Autowired
	private AppUserDetailsService userDetailsService;

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView login() {
		final ModelAndView view  = new ModelAndView();
		view.setViewName("index.html");
		return view;
	}

	@RequestMapping(value = "/checkIfUserIdAvailable/{userId}", method = RequestMethod.GET)
	public AppResponse checkIfUserIdAvailable(@PathVariable("userId") final String userId) {

		final AppResponse response = AppResponse.getDefaultResponse();
		if (userId == null || userId.trim().length() == 0) {
			response.setMessage("The provided User Id is either null or empty.");
		} else if (userId.length() < 6 || userId.length() > 10) {
			response.setMessage("User Id length must be minimum 6 character and maximum upto 10 characters.");
		} else if (userId == null || userId.length() < 6 || this.userDetailsService.checkIfUserExists(userId)) {
			response.setMessage("The provided User Id is already in use. Please provide a different one.");
		} else {
			response.setStatus("SUCCESS");
			response.setStatusCode(1);
		}
		return response;
	}

	@RequestMapping(value = "/sendUserId", method = RequestMethod.POST)
	public ResponseEntity<String> test(@RequestBody String userId) {
		final AppResponse response = AppResponse.getDefaultResponse();
		if (userId == null) {
			response.setMessage("Invalid userId");
		} else {
			response.setStatus("SUCCESS");
			response.setStatusCode(1);
			response.setMessage("UserId provided is: " + userId);
		}
		return new ResponseEntity<String>(response.getMessage(), HttpStatus.OK);
	}

	@RequestMapping(value = "/registerUser", method = RequestMethod.POST)
	public AppResponse registerUser(@RequestBody Registration registration) {

		final String userId = registration.getUserId();
		final AppResponse response = checkIfUserIdAvailable(userId);
		final String password = registration.getPassword();
		if (response.getStatusCode() == 1) {
			this.userDetailsService.createAppUser(registration);
			response.setMessage(
					"Congratulation! User registration is successful. You will be redirected to login page in 3 seconds...");
		} else if (password == null || password.trim().length() == 0) {
			response.setMessage("The provided password is either null or empty.");
		} else if (password.length() < 6 || password.length() > 10) {
			response.setMessage("Password length must be minimum 6 character and maximum upto 10 characters.");
		}
		return response;
	}
}
