import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItems } from './view-all-items';

describe('ViewAllItems', () => {
  let component: ViewAllItems;
  let fixture: ComponentFixture<ViewAllItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
