import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodsComponent } from './shipping-methods.component';

describe('ShippingMethodsComponent', () => {
  let component: ShippingMethodsComponent;
  let fixture: ComponentFixture<ShippingMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingMethodsComponent]
    });
    fixture = TestBed.createComponent(ShippingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
