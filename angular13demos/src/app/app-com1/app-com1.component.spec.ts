import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCom1Component } from './app-com1.component';

describe('AppCom1Component', () => {
  let component: AppCom1Component;
  let fixture: ComponentFixture<AppCom1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCom1Component]
    });
    fixture = TestBed.createComponent(AppCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
