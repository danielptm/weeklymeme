import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeekComponent } from './last-week.component';

describe('LastWeekComponent', () => {
  let component: LastWeekComponent;
  let fixture: ComponentFixture<LastWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
