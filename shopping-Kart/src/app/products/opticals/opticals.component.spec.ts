import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalsComponent } from './opticals.component';

describe('OpticalsComponent', () => {
  let component: OpticalsComponent;
  let fixture: ComponentFixture<OpticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
