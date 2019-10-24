import { Component, OnInit, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input()
  error: any = null;

  constructor() { }

  ngOnInit() {
    if (this.error) {
      console.log(this.error.status);
      console.log(this.error.statusText);
    }


  }

}
