import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChildCategoryComponent } from './create-child-category.component';

describe('CreateChildCategoryComponent', () => {
  let component: CreateChildCategoryComponent;
  let fixture: ComponentFixture<CreateChildCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChildCategoryComponent]
    });
    fixture = TestBed.createComponent(CreateChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
