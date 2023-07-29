import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCsvComponent } from './line-csv.component';

describe('LineCsvComponent', () => {
  let component: LineCsvComponent;
  let fixture: ComponentFixture<LineCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
