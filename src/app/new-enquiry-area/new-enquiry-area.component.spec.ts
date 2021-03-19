import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquiryAreaComponent } from './new-enquiry-area.component';

describe('NewEnquiryAreaComponent', () => {
  let component: NewEnquiryAreaComponent;
  let fixture: ComponentFixture<NewEnquiryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnquiryAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnquiryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
