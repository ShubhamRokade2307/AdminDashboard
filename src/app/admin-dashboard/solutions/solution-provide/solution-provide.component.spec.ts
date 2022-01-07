import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionProvideComponent } from './solution-provide.component';

describe('SolutionProvideComponent', () => {
  let component: SolutionProvideComponent;
  let fixture: ComponentFixture<SolutionProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
