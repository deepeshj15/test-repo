package com.project.login.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.login.model.AppUser;

@Repository
public interface AppUserRepository extends CrudRepository<AppUser, String> {
}