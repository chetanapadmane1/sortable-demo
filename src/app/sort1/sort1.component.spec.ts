import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sort1Component } from './sort1.component';

describe('Sort1Component', () => {
  let component: Sort1Component;
  let fixture: ComponentFixture<Sort1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sort1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sort1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
