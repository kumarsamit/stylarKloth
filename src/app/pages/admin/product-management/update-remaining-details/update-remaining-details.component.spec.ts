import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRemainingDetailsComponent } from './update-remaining-details.component';

describe('UpdateRemainingDetailsComponent', () => {
  let component: UpdateRemainingDetailsComponent;
  let fixture: ComponentFixture<UpdateRemainingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRemainingDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateRemainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
