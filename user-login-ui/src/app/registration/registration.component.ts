import { Component, OnInit, Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { RegistrationService } from '../service/registration.service';
import {} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ RegistrationService ]
})
export class RegistrationComponent implements OnInit {

  registration: Registration;
  errorMsg: string;
  successMsg: string;

  constructor(private registrationService: RegistrationService) {
    this.registration = new Registration();
  }

  ngOnInit() {
  }

  onRegister(registration: Registration) {
    this.registration = registration;
    this.errorMsg = null;
    this.successMsg = null;

    console.log("Data: " + this.registration.userId + ", " + this.registration.password + ", " 
    + this.registration.email + ", " + registration.confirmPassword + ", " + this.registration.userName 
    + ", " + this.registration.city + ", " + this.registration.birthdate + ", " 
    + this.registration.secretQuestion + ", " + registration.secretAnswer);

    this.errorMsg = this.registrationService.validateUserRegistration(this.registration);
    if (this.errorMsg == null) {
      this.registrationService.validateUser(registration).subscribe(
        data => {
          console.log("Response: ", data);
          if (data['statusCode'] == 0) {
            this.errorMsg = data['message'];
          } else if (data['statusCode'] == 1)   {
            this.successMsg = data['message'];
          } 
        }
      );
    }
  }
}
