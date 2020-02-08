import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearComponent } from './last-year.component';

describe('LastYearComponent', () => {
  let component: LastYearComponent;
  let fixture: ComponentFixture<LastYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
