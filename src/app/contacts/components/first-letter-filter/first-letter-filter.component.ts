import { ContactService } from '../../contacts.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-letter-filter',
  templateUrl: './first-letter-filter.component.html',
  styleUrls: ['./first-letter-filter.component.scss']
})

export class FirstLetterFilterComponent implements OnInit, OnDestroy {


  // Contact
  private firstLetterSub: Subscription;
  public firstLetters: string[];

  selectedIndex = -1; // not possible class

  @Output() activeFirstLetter = new EventEmitter<string>();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.firstLetterSub = this.contactService.contactFirstLetters.subscribe(firstLetters => {
      this.firstLetters = firstLetters;
      // Remove active class
      this.removeElementClass();
    });
  }

  selectFirstLetter(letter: string, index: number): void {
    this.setElementClassToActive(index);
    this.activeFirstLetter.emit(letter);
  }

  ngOnDestroy(): void {
    this.firstLetterSub.unsubscribe();
  }

  setElementClassToActive(index: number): void {
    this.selectedIndex = index;
  }

  removeElementClass(): void {
    this.setElementClassToActive(-1);
  }
}
