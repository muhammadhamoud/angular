import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropsComponent } from './add-props.component';

describe('AddPropsComponent', () => {
  let component: AddPropsComponent;
  let fixture: ComponentFixture<AddPropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPropsComponent]
    });
    fixture = TestBed.createComponent(AddPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
