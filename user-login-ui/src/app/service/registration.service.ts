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

  validateUserRegistration(registration: Registration) {

    var error = this.validateTextField(registration.userId, 'User Id');
    if (error == null) {
      error = this.validateTextField(registration.password, 'Password');
    }
    if (error == null) {
      error = this.validateTextField(registration.userName, 'User Name');
    }
    if (error == null) {
      error = this.validateTextField(registration.email, 'Email');
    }
    if (error == null) {
      error = this.validateTextField(registration.city, 'City');
    }
    if (error == null) {
      error = this.validateDateField(registration.birthdate, 'Date of Birth ');
    }
    return error;
  }

  private validateTextField(field: string, fieldName: string) {
    if (field == null || field == '') {
      return "The provided " + fieldName + " is either null or empty.";
    }
    return null;
  }

  private validateDateField(field: Date, fieldName: string) {
    if (field == null) {
      return "The provided " + fieldName + " is either null or empty.";
    }
    return null;
  }

  validateUser(registration: Registration): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      "http://localhost:8080/registration/validateUser", registration, options)
      .map((data)=>{ return data.json() });
               
      //.catch((err)=>{ return err; });
    //headers.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    //headers.append('Access-Control-Allow-Origin', "*");
    //let options = new RequestOptions({ headers: headers, method: "get" }); 
    /*return this.http.get("http://localhost:8080/registration/validateUser/" 
    + registration.userId)
            .map((data)=>{ return data.json() }) 
            .catch((err)=>{ return err; })*/
  }
}
