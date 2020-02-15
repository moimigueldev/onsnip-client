import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';
import { ArtistList } from 'src/app/share/interfaces/list';

@Component({
  selector: 'app-artist-following',
  templateUrl: './artist-following.component.html',
  styleUrls: ['./artist-following.component.scss']
})
export class ArtistFollowingComponent implements OnInit {

  //====================================
  //              Subscriptions
  //====================================

  ArtistSubscriptions: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  artistResponse: ArtistList;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.ArtistSubscriptions = this.spotifyService.ArtistFollowing.subscribe((artist: ArtistList) => {
      this.artistResponse = artist;
    })
  }

  ngOnDestroy(): void {
    this.ArtistSubscriptions ? this.ArtistSubscriptions.unsubscribe() : null;
  }

}
