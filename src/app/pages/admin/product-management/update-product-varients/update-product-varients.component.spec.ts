import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductVarientsComponent } from './update-product-varients.component';

describe('UpdateProductVarientsComponent', () => {
  let component: UpdateProductVarientsComponent;
  let fixture: ComponentFixture<UpdateProductVarientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductVarientsComponent]
    });
    fixture = TestBed.createComponent(UpdateProductVarientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
