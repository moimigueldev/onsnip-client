import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSongsComponent } from './total-songs.component';

describe('TotalSongsComponent', () => {
  let component: TotalSongsComponent;
  let fixture: ComponentFixture<TotalSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
