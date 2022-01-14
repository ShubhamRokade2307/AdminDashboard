import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionContactusComponent } from './solution-contactus.component';

describe('SolutionContactusComponent', () => {
  let component: SolutionContactusComponent;
  let fixture: ComponentFixture<SolutionContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
