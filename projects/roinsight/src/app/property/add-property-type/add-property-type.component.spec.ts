import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyTypeComponent } from './add-property-type.component';

describe('AddPropertyTypeComponent', () => {
  let component: AddPropertyTypeComponent;
  let fixture: ComponentFixture<AddPropertyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
