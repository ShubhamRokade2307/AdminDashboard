import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLatestVideosComponent } from './about-latest-videos.component';

describe('AboutLatestVideosComponent', () => {
  let component: AboutLatestVideosComponent;
  let fixture: ComponentFixture<AboutLatestVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLatestVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLatestVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
