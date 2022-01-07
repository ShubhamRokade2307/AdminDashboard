import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartnarsComponent } from './home-partnars.component';

describe('HomePartnarsComponent', () => {
  let component: HomePartnarsComponent;
  let fixture: ComponentFixture<HomePartnarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartnarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePartnarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
