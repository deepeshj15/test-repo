package com.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.project.login.config.security.AppAuthenticationProvider;
import com.project.login.model.AppResponse;
import com.project.login.model.Login;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private AppAuthenticationProvider authenticationProvider;

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView login() {
		final ModelAndView view  = new ModelAndView();
		view.setViewName("index.html");
		return view;
	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public AppResponse doLogin(@RequestBody Login login) {

		final AppResponse response = AppResponse.getDefaultResponse();
		try {

			final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(login.getUserId(),
					login.getPassword(), null);
			this.authenticationProvider.authenticate(token);
			if (token.isAuthenticated()) {
				response.setStatus("SUCCESS");
				response.setStatusCode(1);
				SecurityContextHolder.getContext().setAuthentication(token);
			} else {
				response.setMessage("Invalid Credentials. Please try again");
			}
		} catch (AuthenticationException e) {
			response.setMessage(e.getMessage());
		}
		return response;
	}
}