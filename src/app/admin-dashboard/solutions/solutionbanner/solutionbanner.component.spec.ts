import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionbannerComponent } from './solutionbanner.component';

describe('SolutionbannerComponent', () => {
  let component: SolutionbannerComponent;
  let fixture: ComponentFixture<SolutionbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
