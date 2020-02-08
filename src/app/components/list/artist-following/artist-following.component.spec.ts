import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFollowingComponent } from './artist-following.component';

describe('ArtistFollowingComponent', () => {
  let component: ArtistFollowingComponent;
  let fixture: ComponentFixture<ArtistFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
