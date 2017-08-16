import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { 
  }

  public getSecretQuestions() {
    return ['What is the name of your school name?', 'What is the name of your elder child?',
    'What is the name of your cell phone operator?'];
  }

  public validateUserRegistrationForm(registration: Registration) {

    this.validateTextField(registration.userId, 'User Id', true);
    this.validateTextField(registration.password, 'Password', true);
    this.validateTextField(registration.email, 'Email', true);
    this.validateTextField(registration.userName, 'User Name', false);
    this.validateTextField(registration.city, 'City', false);
    this.validateDateField(registration.birthdate, 'Date of Birth', false);
    this.validateTextField(registration.secretQuestion, 'Secret Question', true);
    this.validateTextField(registration.secretAnswer, 'secretAnswer', true);
  }

  private validateTextField(field: string, fieldName: string, required: boolean) {
    if (required && (field == null || field == '')) {
      throw new Error ("The provided " + fieldName + " is either null or empty.");
    }
  }

  private validateDateField(field: Date, fieldName: string, required: boolean) {
    if (required && field == null) {
      throw new Error ("The provided " + fieldName + " is either null or empty.");
    }
  }

  public registerUser(registration: Registration): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "/registration/registerUser", registration, options)
      .map( data => { return data.json() });
      //.catch( err=> { return err; });
  }

  public checkIfUserIdAvailable(userId: string): Observable<any> {

    return this.http.get(
      "/registration/checkIfUserIdAvailable/" + userId)
      .map( data => { return data.json(); })
      .catch( err => { return err; });
  }
}