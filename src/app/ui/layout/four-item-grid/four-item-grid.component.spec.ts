import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourItemGridComponent } from './four-item-grid.component';

describe('FourItemGridComponent', () => {
  let component: FourItemGridComponent;
  let fixture: ComponentFixture<FourItemGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourItemGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
