import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsTabPage } from './directions-tab.page';

describe('DirectionsTabPage', () => {
  let component: DirectionsTabPage;
  let fixture: ComponentFixture<DirectionsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
