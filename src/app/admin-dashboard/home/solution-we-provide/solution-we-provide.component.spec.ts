import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionWeProvideComponent } from './solution-we-provide.component';

describe('SolutionWeProvideComponent', () => {
  let component: SolutionWeProvideComponent;
  let fixture: ComponentFixture<SolutionWeProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionWeProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionWeProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
