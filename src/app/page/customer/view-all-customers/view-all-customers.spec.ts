import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCustomers } from './view-all-customers';

describe('ViewAllCustomers', () => {
  let component: ViewAllCustomers;
  let fixture: ComponentFixture<ViewAllCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
