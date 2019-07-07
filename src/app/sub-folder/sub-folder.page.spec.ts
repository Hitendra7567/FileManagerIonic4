import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFolderPage } from './sub-folder.page';

describe('SubFolderPage', () => {
  let component: SubFolderPage;
  let fixture: ComponentFixture<SubFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFolderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
