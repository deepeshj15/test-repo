import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userId: string;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.forEach(
      (params: ParamMap) => {
      this.userId = activatedRoute.snapshot.params['userId'];
    });
  }

  ngOnInit() {
  }

}
