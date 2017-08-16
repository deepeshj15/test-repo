import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public doLogin(userLogin: Login): Observable<any> {

    this.validateTextField(userLogin.userId, 'User Id');
    this.validateTextField(userLogin.password, 'Password');

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "/login/authenticate", userLogin, options)
      .map( data =>{ return data.json() });
      //.catch( err =>{ return err; });
  }

  private validateTextField(field: string, fieldName: string) {
    if (field == null || field == '') {
      throw new Error ("The provided " + fieldName + " is either null or empty.");
    }
  }
}
