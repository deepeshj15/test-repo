import { Component, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Registration } from '../model/registration';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { 
  }

  public getSecretQuestions() {
    return ['What is the name of your school name?', 'What is the name of your elder child?',
    'What is the name of your cell phone operator?'];
  }

  public checkIfUserIdAvailable(userId: string): Observable<any> {

    return this.http.get(
      "/registration/checkIfUserIdAvailable/" + userId)
      .map( data => { return data.json(); })
      .catch( err => { return err; });
  }

  public registerUser(registration: Registration): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "/registration/registerUser", registration, options)
      .map( data => { return data.json() });
      //.catch( err=> { return err; });
  }
}