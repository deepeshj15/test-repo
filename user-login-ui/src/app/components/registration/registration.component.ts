import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Registration } from '../../model/registration';
import { RegistrationService } from '../../services/registration.service';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ RegistrationService, FormValidationService ]
})
export class RegistrationComponent implements OnInit {

  registration: Registration;
  errorMsg: string;
  successMsg: string;
  secretQuestions: string[];
  isValidUserId: boolean;

  constructor(private registrationService: RegistrationService, private router: Router, 
    private formValidationService: FormValidationService) {

    this.registration = new Registration();
    this.secretQuestions = this.registrationService.getSecretQuestions();
  }

  ngOnInit() {
  }

  doRegister(registration: Registration) {

    this.errorMsg = null;
    this.successMsg = null;
    this.registration = registration;
    try {
      this.formValidationService.validateTextField(this.registration.userId, 'User Id', true);
      this.formValidationService.validateTextField(this.registration.password, 'Password', true);
      this.formValidationService.validateTextField(this.registration.email, 'Email', true);
      //this.formValidationService.validateTextField(this.registration.userName, 'User Name', true);
      //this.formValidationService.validateTextField(this.registration.city, 'City', false);
      //this.formValidationService.validateDateField(this.registration.birthdate, 'Date of Birth', false);
      this.formValidationService.validateTextField(this.registration.secretQuestion, 'Secret Question', true);
      this.formValidationService.validateTextField(this.registration.secretAnswer, 'secretAnswer', true);
      this.registerUser(this.registration);
    } catch (e) {
      this.errorMsg = e.message;
    }
  }

  registerUser(registration: Registration) {

    try {
      /* Check if User details is available or not */
      this.registrationService.registerUser(registration).subscribe(
        data => {
          if (data['statusCode'] == 0) {
            throw new Error(data['message']);
          } else if (data['statusCode'] == 1)   {

            this.successMsg = data['message'];
            this.isValidUserId = true;
            setTimeout((router: Router) => {
              this.router.navigate(['/login', this.registration.userId]);
            }, 3000);  //3s
          } 
        }
      );
    } catch (e) {
      this.errorMsg = e.message;
    }
  }

  checkIfUserIdAvailable(userId: string) {
    
    this.errorMsg = null;
    this.successMsg = null;
    this.isValidUserId = false;

    /* Check if UserId is available or not */
    try {
      this.formValidationService.validateTextField(this.registration.userId, 'User Id', true);
      this.registrationService.checkIfUserIdAvailable(userId).subscribe(
          data => {
            if (data['statusCode'] == 0) {
              this.errorMsg = data['message'];
            } else if (data['statusCode'] == 1)   {
              this.isValidUserId = true;
            }
          }
        );
    } catch(e) {
      this.errorMsg = e.message;
    }
  }
}
