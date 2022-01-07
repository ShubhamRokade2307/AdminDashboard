import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCounterComponent } from './first-counter.component';

describe('FirstCounterComponent', () => {
  let component: FirstCounterComponent;
  let fixture: ComponentFixture<FirstCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
