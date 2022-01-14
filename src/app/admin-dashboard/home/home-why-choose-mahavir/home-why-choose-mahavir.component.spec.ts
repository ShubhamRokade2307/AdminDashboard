import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyChooseMahavirComponent } from './home-why-choose-mahavir.component';

describe('HomeWhyChooseMahavirComponent', () => {
  let component: HomeWhyChooseMahavirComponent;
  let fixture: ComponentFixture<HomeWhyChooseMahavirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhyChooseMahavirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyChooseMahavirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
