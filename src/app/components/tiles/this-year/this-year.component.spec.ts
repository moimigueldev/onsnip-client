import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisYearComponent } from './this-year.component';

describe('ThisYearComponent', () => {
  let component: ThisYearComponent;
  let fixture: ComponentFixture<ThisYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
