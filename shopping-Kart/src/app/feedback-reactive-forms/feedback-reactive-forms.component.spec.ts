import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReactiveFormsComponent } from './feedback-reactive-forms.component';

describe('FeedbackReactiveFormsComponent', () => {
  let component: FeedbackReactiveFormsComponent;
  let fixture: ComponentFixture<FeedbackReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
