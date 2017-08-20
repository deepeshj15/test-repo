package com.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.login.model.AppResponse;
import com.project.login.model.AppUser;
import com.project.login.service.AppUserDetailsService;

@RestController
@RequestMapping("/profile")
public class UserProfileController {

	@Autowired
	private AppUserDetailsService userDetailsService;

	@RequestMapping(value = "/getUserProfile/{userId}", method = RequestMethod.GET)
	public AppResponse findUserProfile(@PathVariable("userId") final String userId) {

		final AppResponse response = AppResponse.getDefaultResponse();
		final AppUser user = this.userDetailsService.findUserByUserId(userId);
		if (user != null) {
			//user.setPassword(null);
			response.setStatus("SUCCESS");
			response.setStatusCode(1);
			response.setModel(user);
		}
		return response;
	}
}
