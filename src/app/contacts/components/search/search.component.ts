import { ContactService } from '../../contacts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  search = new FormControl('', []);

  constructor(
    private contactService: ContactService
  ) {

  }

  ngOnInit() { }

  filterProducts() {
    this.contactService.updateFilterText(this.search.value);
  }

}
