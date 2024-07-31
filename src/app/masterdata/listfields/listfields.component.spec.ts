import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfieldsComponent } from './listfields.component';

describe('ListfieldsComponent', () => {
  let component: ListfieldsComponent;
  let fixture: ComponentFixture<ListfieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListfieldsComponent]
    });
    fixture = TestBed.createComponent(ListfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
