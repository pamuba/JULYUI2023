import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCom2Component } from './app-com2.component';

describe('AppCom2Component', () => {
  let component: AppCom2Component;
  let fixture: ComponentFixture<AppCom2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCom2Component]
    });
    fixture = TestBed.createComponent(AppCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
