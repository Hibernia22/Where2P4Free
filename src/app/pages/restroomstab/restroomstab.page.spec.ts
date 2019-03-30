import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroomstabPage } from './restroomstab.page';

describe('RestroomstabPage', () => {
  let component: RestroomstabPage;
  let fixture: ComponentFixture<RestroomstabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestroomstabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroomstabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
