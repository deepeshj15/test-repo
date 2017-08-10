package com.project.login.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AppAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

	@Autowired
	private AppUserDetailsService userDetailsService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void additionalAuthenticationChecks(final UserDetails userDetails,
			final UsernamePasswordAuthenticationToken token) throws AuthenticationException {

		if (token.getCredentials() == null || userDetails.getPassword() == null) {
			throw new BadCredentialsException("Password cannot be null");
		}
		if (!this.passwordEncoder.matches((String) token.getCredentials(), userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid password. Please try again");
		}
	}

	@Override
	public UserDetails retrieveUser(final String userId, UsernamePasswordAuthenticationToken token)
			throws AuthenticationException {

		final UserDetails userDetails = this.userDetailsService.loadUserByUsername(userId);
		return userDetails;
	}
}