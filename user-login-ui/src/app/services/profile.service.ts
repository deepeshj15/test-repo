import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppUser } from '../model/app-user';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  public getUserProfile(userId: string): Observable<any> {

    return this.http.get('/profile/getUserProfile/' + userId)
      .map( data => { return data.json(); })
      .catch( err => { return err; });
  }
}
