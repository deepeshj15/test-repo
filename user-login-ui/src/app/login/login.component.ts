import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import 'rxjs/add/operator/switchMap';

import { Login } from '../model/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  userLogin: Login;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, 
    private loginService: LoginService) {
      
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
    console.log("Request data: " + userLogin.userId + ", " + userLogin.password);
    try {
      this.loginService.doLogin(userLogin).subscribe(
        data => {
          console.log("Response data: " + data['statusCode'] + ", " + data['message']);
          if (data['statusCode'] == 0) {
            this.errorMsg = data['message'];
          } else {
            console.log("Login success");
            this.route.navigate(['/welcome', userLogin.userId]);
          }
        }
      );
    } catch(e) {
      this.errorMsg = e.message;
    }
  }
}
