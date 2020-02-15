import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  //====================================
  //              Subscriptions
  //====================================

  topSongsSubscription: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  topSongsResponse;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.topSongsSubscription = this.spotifyService.topSongs.subscribe(songs => {
      this.topSongsResponse = songs;
      console.log('songss', this.topSongsResponse)
    })
  }

  ngOnDestroy(): void {
    this.topSongsSubscription ? this.topSongsSubscription.unsubscribe() : null;
  }

}
