import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestroomPage } from './add-restroom.page';

describe('AddRestroomPage', () => {
  let component: AddRestroomPage;
  let fixture: ComponentFixture<AddRestroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
