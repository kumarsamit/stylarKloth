import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSidebarComponent } from './website-sidebar.component';

describe('WebsiteSidebarComponent', () => {
  let component: WebsiteSidebarComponent;
  let fixture: ComponentFixture<WebsiteSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteSidebarComponent]
    });
    fixture = TestBed.createComponent(WebsiteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
