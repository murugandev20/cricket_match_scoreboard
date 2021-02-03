import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoreBoardComponent } from './view-score-board.component';

describe('ViewScoreBoardComponent', () => {
  let component: ViewScoreBoardComponent;
  let fixture: ComponentFixture<ViewScoreBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScoreBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
