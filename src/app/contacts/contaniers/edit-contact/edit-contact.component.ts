import { environment } from './../../../../environments/environment';
import { PhoneValidador } from './../../../shared/validators/phone.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../contacts.service';
import { Contact } from '../../models/contact.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})

export class EditContactComponent implements OnInit, OnDestroy {

  // General
  public editAble = false;

  // Error
  public error = null;
  private errorSub: Subscription;

  //  Contact
  private contactSub: Subscription;
  public contact: Contact = null;



  // FORM
  form: FormGroup;

  // formControls
  public emailControl = new FormControl('', [Validators.required, Validators.email]);
  public nameControl = new FormControl('', [Validators.required]);
  public phoneControl = new FormControl('', [PhoneValidador.validate]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: this.emailControl,
      name: this.nameControl,
      phone: this.phoneControl
    }
    )
  }

  ngOnInit() {
    // Error
    this.errorSub = this.contactService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    // Contact
    this.contactSub = this.contactService.contact.subscribe(contact => {
      console.log(contact);

      this.contact = contact;
      // Set contact data when data is ready
      if (this.contact) {
        this.contactInit(this.contact);
      }
    },
    );

    this.route.paramMap.subscribe(paramMap => {

      if (!paramMap.has('id')) {
        this.router.navigateByUrl('/contact');
        return;
      } else {
        console.log('loading');
        if (environment.IS_LOCAL_DATABASE) {
          this.contactService.localSearchContactList(+paramMap.get('id'));

        } else {
          this.contactService.searchContact(paramMap.get('id'));
        }

      }
    });
  }

  contactInit(profile: Contact) {
    this.emailControl.setValue(profile.email || ''),
      this.nameControl.setValue(profile.name || ''),
      this.phoneControl.setValue(profile.phone || '');
  }

  save() {

    this.contact.name = this.form.value.name;
    this.contact.email = this.form.value.email;
    this.contact.phone = this.form.value.phone;

    if (this.isLocalDatabase) {
      this.contactService.updateLocalContact(this.contact);
      this.router.navigateByUrl('contacts');
    } else {
      this.contactService.updateContact(this.contact);
      this.router.navigateByUrl('contacts');
    }

  }

  delete() {
    if (this.isLocalDatabase) {
      this.contactService.deleteLocalContact(this.contact.id);
      this.router.navigateByUrl('contacts');
    } else {
      this.contactService.deleteContact(this.contact.id.toString());
      this.router.navigateByUrl('contacts');
    }

  }

  isValidPhone(phone: string): boolean {
    const minLength = 10;
    const maxLength = 11;

    // + and 10 or 11 digit exp: +12345123451
    const regexp1 = /^[\+]+[0-9]/;
    const valid = regexp1.test(phone) && phone.length >= minLength && phone.length <= maxLength;
    return valid;
  }

  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }

  get isLocalDatabase(): boolean {
    return environment.IS_LOCAL_DATABASE;
  }


}
