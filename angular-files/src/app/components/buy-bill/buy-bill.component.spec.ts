import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBillComponent } from './buy-bill.component';

describe('BuyBillComponent', () => {
  let component: BuyBillComponent;
  let fixture: ComponentFixture<BuyBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
