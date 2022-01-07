import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBuiltComponent } from './what-we-built.component';

describe('WhatWeBuiltComponent', () => {
  let component: WhatWeBuiltComponent;
  let fixture: ComponentFixture<WhatWeBuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeBuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
