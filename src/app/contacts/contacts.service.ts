import { environment } from './../../environments/environment';
import { Contact } from './models/contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ContactService {

  constructor(
    private http: HttpClient
  ) {
    // Filter
    this._filterText.subscribe(() => {
      this.searchContactList(this._filterText.value);
    });
  }


  // Error
  error = new Subject<string>();


  // Filter
  private _filterText = new BehaviorSubject<string>('');

  get filterText() {
    return this._filterText.asObservable();
  }

  updateFilterText(text: string) {
    this._filterText.next(text);
  }


  // ContactList
  private _contactList = new BehaviorSubject<Contact[]>([]);
  get contactList() {
    return this._contactList.asObservable();
  }

  // Contact
  private _contact = new BehaviorSubject<Contact>(null);
  get contact() {
    return this._contact.asObservable();
  }

  private _contactFirstLetters = new BehaviorSubject<string[]>([]);
  get contactFirstLetters() {
    return this._contactFirstLetters.asObservable();
  }


  public searchContactList(filterText?: string) {

    const path = environment.IS_LOCAL_DATABASE ? environment.LOCAL_DATABASE : environment.SERVER_DATABASE;

    // search is not check letter case
    filterText = filterText ? filterText.toLowerCase() : '';

    return this.http.get(path).pipe(
      map(contactList => contactList as Contact[]),
      map(contactList => {
        const filteredContact = filterText ? contactList.filter(x => x.name.toLocaleLowerCase().indexOf(filterText) !== -1) : contactList;
        this._contactList.next(filteredContact);

        this.updateFirstLetter(filteredContact);
      }),

      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    )
      .subscribe(
        contact => contact,
        error => {
          this.error.next(error.message);
        }
      );
  }

  searchContact(id: string) {
    const path = environment.SERVER_DATABASE + `/${id}`;

    // SERVER DATABASE
    return this.http.get(path).pipe(
      map(contact => contact as Contact),
      map(contact => {
        this._contact.next(contact);
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      }
      )
    )
      .subscribe(
        contact => contact,
        error => {
          this.error.next(error);
        }
      );
  }

  updateContact(contact: Contact) {
    const path = environment.SERVER_DATABASE + `/${contact.id}`;
    this.setContactRequest(path, contact, 'PUT');
  }

  newContact(contact: Contact) {
    const path = environment.SERVER_DATABASE;
    this.setContactRequest(path, contact, 'POST');
  }

  setContactRequest(path: string, body: Contact, type: Method) {
    switch (type) {
      case 'PUT':
        return this.http.put(path, body).pipe(
          map(x => {
            console.log(x);
            this.refreshList();
          })
        ).subscribe();
      case 'POST':
        return this.http.post(path, body).pipe(
          map(x => {
            this.refreshList();
          })
        ).subscribe(
          contact => contact,
          error => {
            this.error.next(error);
          }
        );
    }
  }

  deleteContact(id: string) {
    const path = environment.SERVER_DATABASE + `/${id}`;
    return this.http.delete(path).pipe(
      map(x => {
        console.log(x);
        this.refreshList();
      })
    ).subscribe(
      contact => contact,
      error => {
        this.error.next(error);
      }
    );
  }

  updateFirstLetter(filteredContact: Contact[]): void {
    const firstLetters = [];

    filteredContact.forEach(contact => {
      if (!firstLetters.includes(contact.name[0].toLocaleLowerCase())) {
        firstLetters.push(contact.name[0]);
      }
    });
    this._contactFirstLetters.next(firstLetters);
  }

  refreshList(): void {
    this.searchContactList();
  }


  // LOCAL SEARCH CONTACT
  public localSearchContactList(id: number) {

    const path = environment.LOCAL_DATABASE;

    return this.http.get(path).pipe(
      map(contactList => contactList as Contact[]),
      map(contactList => {
        const filteredContact = contactList.find(x => x.id === id);
        this._contact.next(filteredContact);
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    )
      .subscribe(
        contact => contact,
        error => {
          this.error.next(error.message);
        }
      );
  }
}
