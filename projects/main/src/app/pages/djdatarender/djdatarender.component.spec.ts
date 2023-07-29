import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjdatarenderComponent } from './djdatarender.component';

describe('DjdatarenderComponent', () => {
  let component: DjdatarenderComponent;
  let fixture: ComponentFixture<DjdatarenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjdatarenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjdatarenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
