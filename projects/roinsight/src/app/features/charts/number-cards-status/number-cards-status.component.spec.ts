import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardsStatusComponent } from './number-cards-status.component';

describe('NumberCardsStatusComponent', () => {
  let component: NumberCardsStatusComponent;
  let fixture: ComponentFixture<NumberCardsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberCardsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberCardsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
