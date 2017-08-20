import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
  //,
  //directives : [ ProfileComponent ]
})
export class WelcomeComponent implements OnInit {

  userId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.forEach(
      (params: ParamMap) => {
      this.userId = activatedRoute.snapshot.params['userId'];
    });
  }

  ngOnInit() {
  }

  openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
