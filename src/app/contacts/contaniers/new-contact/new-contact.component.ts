import { environment } from './../../../../environments/environment';
import { PhoneValidador } from './../../../shared/validators/phone.validator';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../contacts.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})

export class NewContactComponent implements OnInit, OnDestroy {

  // Error
  public error = null;
  private errorSub: Subscription;

  // FORM
  form: FormGroup;

  // Contact
  public contact: Contact = null;

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
  }


  save() {
    this.contact = this.form.value;
    this.contact.id = this.setId();

    if (environment.IS_LOCAL_DATABASE) {
      this.contactService.addLocalContact(this.contact);
      this.router.navigateByUrl('contacts');
    } else {
      this.contactService.newContact(this.contact);
      this.router.navigateByUrl('contacts');
    }

  }

  private setId(): number {
    const id = Math.floor(Math.random() * 100000);
    return id;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
