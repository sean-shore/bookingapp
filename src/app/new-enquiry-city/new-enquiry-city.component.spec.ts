import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquiryCityComponent } from './new-enquiry-city.component';

describe('NewEnquiryCityComponent', () => {
  let component: NewEnquiryCityComponent;
  let fixture: ComponentFixture<NewEnquiryCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnquiryCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnquiryCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
