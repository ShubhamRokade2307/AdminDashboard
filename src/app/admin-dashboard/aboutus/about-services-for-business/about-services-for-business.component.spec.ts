import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServicesForBusinessComponent } from './about-services-for-business.component';

describe('AboutServicesForBusinessComponent', () => {
  let component: AboutServicesForBusinessComponent;
  let fixture: ComponentFixture<AboutServicesForBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutServicesForBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutServicesForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
