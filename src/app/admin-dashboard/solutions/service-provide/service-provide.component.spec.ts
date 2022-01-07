import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvideComponent } from './service-provide.component';

describe('ServiceProvideComponent', () => {
  let component: ServiceProvideComponent;
  let fixture: ComponentFixture<ServiceProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
