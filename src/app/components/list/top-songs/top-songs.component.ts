import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';
import { TopSongs } from 'src/app/share/interfaces/list';

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
  topSongsResponse: TopSongs;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.topSongsSubscription = this.spotifyService.topSongs.subscribe((songs: TopSongs) => {
      this.topSongsResponse = songs;
    })
  }

  ngOnDestroy(): void {
    this.topSongsSubscription ? this.topSongsSubscription.unsubscribe() : null;
  }

}
