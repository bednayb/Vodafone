import { Subscription } from 'rxjs';
import { ContactService } from '../../contacts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  filterTextSub: Subscription;

  search = new FormControl('', []);

  constructor(
    private contactService: ContactService
  ) {

  }

  ngOnInit() {
    this.filterTextSub = this.contactService.filterText.subscribe(firstLetters => {
      // this.firstLetters = firstLetters;
      this.search.setValue(firstLetters || '');

    });
  }

  filterProducts() {
    this.contactService.updateFilterText(this.search.value);
  }

  ngOnDestroy(): void {
    this.filterTextSub.unsubscribe();
  }

}
