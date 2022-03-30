import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiEventsComponent } from './multi-events.component';

describe('MultiEventsComponent', () => {
  let component: MultiEventsComponent;
  let fixture: ComponentFixture<MultiEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
