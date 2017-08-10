package com.project.login.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.login.data.UserRepository;
import com.project.login.model.Registration;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(final String userId) throws UsernameNotFoundException {

		final Registration user = this.userRepository.findUserByUserId(userId);
		if (user == null) {
			throw new UsernameNotFoundException("A user with this UserId could not be found.");
		}

		final ArrayList<GrantedAuthority> grantedAuthority = new ArrayList<GrantedAuthority>();
		return new User(user.getUserId(), user.getPassword(), true, true, true, true, grantedAuthority);
	}
}
