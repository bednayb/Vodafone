import { Contact } from '../../models/contact.model';
import { ContactService } from '../../contacts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  // Contact
  private contactSub: Subscription;
  public contactList: Contact[];

  public filteredContactList: Contact[];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactSub = this.contactService.filteredContactList.subscribe(contactList => {
      this.contactList = contactList;
      // set copy for first letter filters
      this.filteredContactList = [...this.contactList];
    });
  }

  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }

  filterListByFirstLetter(firstLetter: string) {
    this.filteredContactList = firstLetter ? this.contactList.filter(
      contact => contact.name[0].toLocaleLowerCase() === firstLetter.toLocaleLowerCase()) : this.contactList;
  }
}
