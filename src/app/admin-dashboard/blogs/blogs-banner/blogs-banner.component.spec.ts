import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsBannerComponent } from './blogs-banner.component';

describe('BlogsBannerComponent', () => {
  let component: BlogsBannerComponent;
  let fixture: ComponentFixture<BlogsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
