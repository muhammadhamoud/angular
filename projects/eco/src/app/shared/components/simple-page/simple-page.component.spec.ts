import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePageComponent } from './simple-page.component';

describe('SimplePageComponent', () => {
  let component: SimplePageComponent;
  let fixture: ComponentFixture<SimplePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplePageComponent]
    });
    fixture = TestBed.createComponent(SimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
