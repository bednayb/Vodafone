import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterFilterComponent } from './first-letter-filter.component';

describe('FirstLetterFilterComponent', () => {
  let component: FirstLetterFilterComponent;
  let fixture: ComponentFixture<FirstLetterFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLetterFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLetterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
