import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkingProcessComponent } from './about-working-process.component';

describe('AboutWorkingProcessComponent', () => {
  let component: AboutWorkingProcessComponent;
  let fixture: ComponentFixture<AboutWorkingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWorkingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWorkingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
