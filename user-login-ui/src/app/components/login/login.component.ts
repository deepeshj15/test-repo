import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import 'rxjs/add/operator/switchMap';

import { Login } from '../../model/login';
import { LoginService } from '../../services/login.service';
import { FormValidationService } from '../../services/form-validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService, FormValidationService ]
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  userLogin: Login;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, 
    private loginService: LoginService, private formValidationService: FormValidationService) {
      
    this.userLogin = new Login();
    this.activatedRoute.paramMap.forEach(
      (params: ParamMap) => {
      this.userLogin.userId = activatedRoute.snapshot.params['userId'];
    });
  }

  ngOnInit() {
  }

  doLogin(userLogin: Login) {
    this.errorMsg = null;
    //console.log("Request data: " + userLogin.userId);
    try {

      console.log("Login Id: " + userLogin.userId);    
      this.formValidationService.validateTextField(userLogin.userId, 'User Id', true);
      this.formValidationService.validateTextField(userLogin.password, 'Password', true);
      this.loginService.doLogin(userLogin).subscribe(
        data => {
          //console.log("Response status: " + data['statusCode']);
          if (data['statusCode'] == 0) {
            this.errorMsg = data['message'];
          } else {
            this.route.navigate(['/welcome', userLogin.userId]);
          }
        }
      );
    } catch(e) {
      this.errorMsg = e.message;
    }
  }
}
