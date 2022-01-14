import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusContactComponent } from './contactus-contact.component';

describe('ContactusContactComponent', () => {
  let component: ContactusContactComponent;
  let fixture: ComponentFixture<ContactusContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
