import { SharedModule } from './../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contaniers/contact-page/contact-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { NewContactComponent } from './contaniers/new-contact/new-contact.component';
import { EditContactComponent } from './contaniers/edit-contact/edit-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLetterFilterComponent } from './components/first-letter-filter/first-letter-filter.component';

@NgModule({
  imports: [
    // Default
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Own
    ContactsRoutingModule,
    SharedModule

  ],
  declarations: [
    // Container
    ContactPageComponent,
    // Components
    ContactListComponent,
    SearchComponent,
    CardComponent,
    NewContactComponent,
    EditContactComponent,
    FirstLetterFilterComponent,

  ],
  providers: []
})

export class ContactsModule {
  constructor() { }
}