import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryResultsComponent } from './enquiry-results.component';

describe('EnquiryResultsComponent', () => {
  let component: EnquiryResultsComponent;
  let fixture: ComponentFixture<EnquiryResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
