import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIncreasingBusinessComponent } from './about-increasing-business.component';

describe('AboutIncreasingBusinessComponent', () => {
  let component: AboutIncreasingBusinessComponent;
  let fixture: ComponentFixture<AboutIncreasingBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIncreasingBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIncreasingBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
