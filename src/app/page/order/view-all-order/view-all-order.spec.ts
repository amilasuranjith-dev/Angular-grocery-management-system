import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrder } from './view-all-order';

describe('ViewAllOrder', () => {
  let component: ViewAllOrder;
  let fixture: ComponentFixture<ViewAllOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
