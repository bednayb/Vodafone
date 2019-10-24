import { AbstractControl, Validators } from '@angular/forms';


export class PhoneValidador {

  static validate(control: AbstractControl): { [key: string]: any } | null {

    const minLength = 10;
    const maxLength = 11;

    // + and 10 or 11 digit exp: +12345123451
    const regexp1 = /^[\+]+[0-9]/;
    const valid = regexp1.test(control.value) && control.value.length >= minLength && control.value.length <= maxLength;
    return valid ? null : { invalidPhone: true };
  }
}