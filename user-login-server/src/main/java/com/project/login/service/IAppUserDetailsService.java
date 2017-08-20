package com.project.login.security;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.login.model.AppUser;
import com.project.login.model.Registration;

public interface IAppUserDetailsService {

	void createAppUser(Registration registration) throws UsernameNotFoundException;

	AppUser findUserByUserId(final String userId) throws UsernameNotFoundException;

	boolean checkIfUserExists(final String userId);

}