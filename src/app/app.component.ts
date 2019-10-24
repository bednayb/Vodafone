import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  defaultTitle = 'Vodafone';

  constructor(
    private titleService: Title,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        if (event.snapshot.data.title) {
          this.titleService.setTitle(event.snapshot.data.title);
        } else {
          this.titleService.setTitle(this.defaultTitle);
        }
      }
    });
  }
}
