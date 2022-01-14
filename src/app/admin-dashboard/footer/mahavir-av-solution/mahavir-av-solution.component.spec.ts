import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahavirAVSolutionComponent } from './mahavir-av-solution.component';

describe('MahavirAVSolutionComponent', () => {
  let component: MahavirAVSolutionComponent;
  let fixture: ComponentFixture<MahavirAVSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahavirAVSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahavirAVSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
