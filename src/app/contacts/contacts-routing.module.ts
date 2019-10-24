import { Title } from '@angular/platform-browser';
import { EditContactComponent } from './contaniers/edit-contact/edit-contact.component';
import { NewContactComponent } from './contaniers/new-contact/new-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contaniers/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    data: { title: 'Contacts', animation: 'contacts' },

  },
  {
    path: 'profile',
    children: [
      {
        path: 'new',
        data: { title: 'New Profile', animation: 'newProfile' },
        component: NewContactComponent,
      },
      {
        path: 'details/:id',
        data: { title: 'Profile Details', animation: 'details' },
        component: EditContactComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
