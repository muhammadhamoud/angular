import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeartsLoaderComponent } from './nodearts-loader.component';

describe('NodeartsLoaderComponent', () => {
  let component: NodeartsLoaderComponent;
  let fixture: ComponentFixture<NodeartsLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NodeartsLoaderComponent]
    });
    fixture = TestBed.createComponent(NodeartsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
