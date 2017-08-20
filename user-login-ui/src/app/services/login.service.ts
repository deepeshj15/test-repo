import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from '../model/login';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public doLogin(userLogin: Login): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "/login/authenticate", userLogin, options)
      .map( data =>{ return data.json() });
      //.catch( err =>{ return err; });
  }
}