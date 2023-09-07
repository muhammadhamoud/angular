import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsSearchComponent } from './tags-search.component';

describe('TagsSearchComponent', () => {
  let component: TagsSearchComponent;
  let fixture: ComponentFixture<TagsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TagsSearchComponent]
    });
    fixture = TestBed.createComponent(TagsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
