import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfieldsComponent } from './addfields.component';

describe('AddfieldsComponent', () => {
  let component: AddfieldsComponent;
  let fixture: ComponentFixture<AddfieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfieldsComponent]
    });
    fixture = TestBed.createComponent(AddfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
