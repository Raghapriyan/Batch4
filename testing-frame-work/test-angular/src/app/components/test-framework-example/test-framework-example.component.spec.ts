import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFrameworkExampleComponent } from './test-framework-example.component';

fdescribe('This is to Test Framework only', () => {
  let component: TestFrameworkExampleComponent;
  let fixture: ComponentFixture<TestFrameworkExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFrameworkExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFrameworkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Instance', () => {
    expect(component).toBeTruthy();
  });

  it('Addition of two numbers', () => {
    expect(component.addNumbers('1', '3')).toEqual(4);
  });
});
