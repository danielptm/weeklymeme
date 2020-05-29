import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPieceComponent } from './center-piece.component';

describe('CenterPieceComponent', () => {
  let component: CenterPieceComponent;
  let fixture: ComponentFixture<CenterPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
