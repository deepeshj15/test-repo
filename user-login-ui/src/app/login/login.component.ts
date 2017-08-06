import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login;
  constructor() { 
    this.userLogin = new Login();
  }

  ngOnInit() {
  }

  onLogin(userLogin: Login) {
    this.userLogin = userLogin;
    console.log("Data: " + this.userLogin.userId + ", " + this.userLogin.password);
  }
}
