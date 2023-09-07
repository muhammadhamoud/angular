import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGeneralComponent } from './products-general.component';

describe('ProductsGeneralComponent', () => {
  let component: ProductsGeneralComponent;
  let fixture: ComponentFixture<ProductsGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsGeneralComponent]
    });
    fixture = TestBed.createComponent(ProductsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
