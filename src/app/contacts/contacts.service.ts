import { environment } from './../../environments/environment';
import { Contact } from './models/contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ContactService {

  /* IMPORTANT: For local mode contact list loaded just once */
  isLoadedOnce = false;


  constructor(
    private http: HttpClient
  ) {
    // Filter
    this._filterText.subscribe(() => {
      if (!this.isLoadedOnce) {
        this.searchContactList();
      }
      this.filter(this._filterText.value);
    });

    this.contactList.subscribe(() => {
      this.filter(this._filterText.value);
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

  // Filtered ContactList
  private _filteredContactList = new BehaviorSubject<Contact[]>([]);

  get filteredContactList() {
    return this._filteredContactList.asObservable();
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


  public searchContactList() {
    const path = environment.IS_LOCAL_DATABASE ? environment.LOCAL_DATABASE : environment.SERVER_DATABASE;

    return this.http.get(path).pipe(
      map(contactList => contactList as Contact[]),
      map(contactList => {

        const filteredContact =
          this._filterText.value ? contactList.filter(x =>
            x.name.toLocaleLowerCase().indexOf(this._filterText.value.toLocaleLowerCase()) !== -1) : contactList;

        this._contactList.next(filteredContact);
        this.filter(this._filterText.value);

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

  filter(filterText?: string) {
    const filteredContactList = filterText ? this._contactList.value.filter(x => x.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1) : this._contactList.value;
    this._filteredContactList.next(filteredContactList);

    this.updateFirstLetter(this._filteredContactList.value);
  }

  searchContact(id: string) {
    const path = environment.SERVER_DATABASE + `/${id}`;
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
        firstLetters.push(contact.name[0].toLocaleLowerCase());
      }
    });
    this._contactFirstLetters.next(firstLetters);
  }

  refreshList(): void {
    this.searchContactList();
  }


  // ******************** LOCAL ********************//

  // LOCAL SEARCH CONTACT
  public localSearchContactList(id: number) {

    const path = environment.LOCAL_DATABASE;
    // if it's the first call the list hasn't been loaded
    if (!this.isLoadedOnce) {
      this.isLoadedOnce = true;

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
    } else {

      const filteredContact = this._contactList.value.find(x => x.id === id);


      this._contact.next(filteredContact);
    }

  }

  // LOCAL DELETE
  public deleteLocalContact(id: number): void {
    const listAfterDelete = this._contactList.value.filter(contact => contact.id !== id);
    this._contactList.next(listAfterDelete);

  }

  // LOCAL UPDATE
  public updateLocalContact(contact: Contact): void {
    const updatedContactList = this._contactList.value;
    for (let i = 0; i < updatedContactList.length; i++) {
      if (contact.id === updatedContactList[i].id) {
        updatedContactList[i] = contact;
        break;
      }
    }
    this._contactList.next(updatedContactList);
  }


  // LOCAL NEW
  public addLocalContact(contact: Contact) {
    const addedContactList = this._contactList.value;
    addedContactList.push(contact);
    this._contactList.next(addedContactList);
  }


}
