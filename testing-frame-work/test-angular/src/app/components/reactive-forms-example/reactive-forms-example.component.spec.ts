import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';

describe('This is Reactive Forms Testing', () => {
  let component: ReactiveFormsExampleComponent;
  let fixture: ComponentFixture<ReactiveFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
