import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquiryFormComponent } from './new-enquiry-form.component';

describe('NewEnquiryFormComponent', () => {
  let component: NewEnquiryFormComponent;
  let fixture: ComponentFixture<NewEnquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnquiryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
