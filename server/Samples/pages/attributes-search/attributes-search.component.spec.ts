import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesSearchComponent } from './attributes-search.component';

describe('AttributesSearchComponent', () => {
  let component: AttributesSearchComponent;
  let fixture: ComponentFixture<AttributesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AttributesSearchComponent]
    });
    fixture = TestBed.createComponent(AttributesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
