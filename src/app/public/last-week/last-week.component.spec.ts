import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeekComponent } from './last-week.component';
import {StateObservable, Store, StoreModule} from "@ngrx/store";
import {MatButtonModule} from "@angular/material/button";
import {LastWeekReducer} from "./store/last-week.reducer";

describe('LastWeekComponent', () => {
  let component: LastWeekComponent;
  let fixture: ComponentFixture<LastWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWeekComponent ],
      imports: [
        StoreModule.forRoot({lastWeek: LastWeekReducer}),
      ]
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
