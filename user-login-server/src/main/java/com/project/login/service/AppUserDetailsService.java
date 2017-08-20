package com.project.login.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.login.model.AppUser;
import com.project.login.model.Registration;
import com.project.login.repository.AppUserRepository;

@Service
public class AppUserDetailsService implements UserDetailsService, IAppUserDetailsService {

	@Autowired
	private AppUserRepository appUserRepository;

	@Override
	public UserDetails loadUserByUsername(final String userId) throws UsernameNotFoundException {

		final AppUser user = findUserByUserId(userId);
		final ArrayList<GrantedAuthority> grantedAuthority = new ArrayList<GrantedAuthority>();
		return new User(user.getUserId(), user.getPassword(), true, true, true, true, grantedAuthority);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.project.login.security.IAppUserDetailsService#createAppUser(com.project.
	 * login.model.Registration)
	 */
	@Override
	public void createAppUser(final Registration registration) throws UsernameNotFoundException {

		final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		final String hashedPassword = passwordEncoder.encode(registration.getPassword());
		AppUser user = new AppUser(registration.getUserId(), hashedPassword, registration.getEmail(),
				registration.getUserName(), registration.getCity(), registration.getBirthdate(),
				registration.getSecretQuestion(), registration.getSecretAnswer());

		user = this.appUserRepository.save(user);
		this.appUserRepository.findOne(registration.getUserId());
	}

	@Override
	public AppUser findUserByUserId(final String userId) {

		final AppUser user = this.appUserRepository.findOne(userId);
		if (user == null) {
			throw new UsernameNotFoundException("A user with this UserId could not be found.");
		}
		return user;
	}
	
	@Override
	public boolean checkIfUserExists(final String userId) {
		return this.appUserRepository.exists(userId);
	}
}
