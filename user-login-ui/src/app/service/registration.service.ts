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

    this.validateTextField(registration.userId, 'User Id');
    this.validateTextField(registration.password, 'Password');
    this.validateTextField(registration.userName, 'User Name');
    this.validateTextField(registration.email, 'Email');
    this.validateTextField(registration.city, 'City');
    this.validateDateField(registration.birthdate, 'Date of Birth ');
    this.validateTextField(registration.secretQuestion, 'Secret Question');
    this.validateTextField(registration.secretAnswer, 'secretAnswer');
  }

  private validateTextField(field: string, fieldName: string) {
    if (field == null || field == '') {
      throw new Error ("The provided " + fieldName + " is either null or empty.");
    }
  }

  private validateDateField(field: Date, fieldName: string) {
    if (field == null) {
      throw new Error ("The provided " + fieldName + " is either null or empty.");
    }
  }

  public registerUser(registration: Registration): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "http://localhost:8080/registration/registerUser", registration, options)
      .map( data => { return data.json() });
      //.catch( err=> { return err; });
  }

  public checkIfUserIdAvailable(userId: string): Observable<any> {

    return this.http.get(
      "http://localhost:8080/registration/checkIfUserIdAvailable/" + userId)
      .map( data => { return data.json(); })
      .catch( err => { return err; });
  }
}