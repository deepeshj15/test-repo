import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { AppUser } from '../../model/app-user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  private userId: string;
  private appUser: AppUser;
  private errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute, private profileservice: ProfileService) {
    this.activatedRoute.paramMap.forEach(
      (params: ParamMap) => {
      this.userId = activatedRoute.snapshot.params['userId'];
    });
  }

  ngOnInit() {
    try {
      this.profileservice.getUserProfile(this.userId).subscribe( 
        data => {
          if (data['statusCode'] == 1) {
            console.log(data['model']);
            this.appUser = data['model'];
            console.log("Model: " + data['model'].userName);
          } else {
            this.errorMsg = data['message'];
          }
        }
      );
    } catch(e) {
      this.errorMsg = e.message;
    }
  }
}
