import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitScoresComponent } from './submit-scores.component';

describe('SubmitScoresComponent', () => {
  let component: SubmitScoresComponent;
  let fixture: ComponentFixture<SubmitScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
