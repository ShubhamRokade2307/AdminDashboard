import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoSolutionsComponent } from './audio-video-solutions.component';

describe('AudioVideoSolutionsComponent', () => {
  let component: AudioVideoSolutionsComponent;
  let fixture: ComponentFixture<AudioVideoSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVideoSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVideoSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
