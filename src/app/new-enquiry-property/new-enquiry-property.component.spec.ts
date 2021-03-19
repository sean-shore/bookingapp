import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquiryPropertyComponent } from './new-enquiry-property.component';

describe('NewEnquiryPropertyComponent', () => {
  let component: NewEnquiryPropertyComponent;
  let fixture: ComponentFixture<NewEnquiryPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnquiryPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnquiryPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
