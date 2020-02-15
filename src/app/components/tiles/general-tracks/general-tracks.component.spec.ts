import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTracksComponent } from './general-tracks.component';

describe('GeneralTracksComponent', () => {
  let component: GeneralTracksComponent;
  let fixture: ComponentFixture<GeneralTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
