import { Contact } from '../../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input()
  contactList: Contact[];

  constructor() { }

  ngOnInit() {
  }

}
