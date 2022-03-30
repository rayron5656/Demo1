import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copyright2Component } from './copyright2.component';

describe('Copyright2Component', () => {
  let component: Copyright2Component;
  let fixture: ComponentFixture<Copyright2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copyright2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copyright2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
