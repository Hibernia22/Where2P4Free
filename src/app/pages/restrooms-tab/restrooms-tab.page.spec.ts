import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroomsTabPage } from './restrooms-tab.page';

describe('RestroomsTabPage', () => {
  let component: RestroomsTabPage;
  let fixture: ComponentFixture<RestroomsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestroomsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroomsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
