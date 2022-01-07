import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTestimonialComponent } from './solution-testimonial.component';

describe('SolutionTestimonialComponent', () => {
  let component: SolutionTestimonialComponent;
  let fixture: ComponentFixture<SolutionTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
