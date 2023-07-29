import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCsvDataComponent } from './collect-csv-data.component';

describe('CollectCsvDataComponent', () => {
  let component: CollectCsvDataComponent;
  let fixture: ComponentFixture<CollectCsvDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectCsvDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectCsvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
