import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategoriesAllComponent } from './general-categories-all.component';

describe('GeneralCategoriesAllComponent', () => {
  let component: GeneralCategoriesAllComponent;
  let fixture: ComponentFixture<GeneralCategoriesAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GeneralCategoriesAllComponent]
    });
    fixture = TestBed.createComponent(GeneralCategoriesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
