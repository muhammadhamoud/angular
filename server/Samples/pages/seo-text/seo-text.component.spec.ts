import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoTextComponent } from './seo-text.component';

describe('SeoTextComponent', () => {
  let component: SeoTextComponent;
  let fixture: ComponentFixture<SeoTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeoTextComponent]
    });
    fixture = TestBed.createComponent(SeoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
