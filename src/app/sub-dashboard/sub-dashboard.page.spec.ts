import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDashboardPage } from './sub-dashboard.page';

describe('SubDashboardPage', () => {
  let component: SubDashboardPage;
  let fixture: ComponentFixture<SubDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
