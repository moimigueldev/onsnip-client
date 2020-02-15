import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { FavoriteTrack } from 'src/app/share/interfaces/tracks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  //====================================
  //              SUBSCRIPTIONS
  //====================================

  FavoriteSongSubscription: Subscription;

  //====================================
  //              GLOBALS
  //====================================

  favoriteSongResponse: FavoriteTrack;


  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {

    this.FavoriteSongSubscription = this.spotifyService.favoriteSong.subscribe((track: FavoriteTrack) => {
      this.favoriteSongResponse = track;

    })
  }

  ngOnDestroy(): void {
    this.FavoriteSongSubscription ? this.FavoriteSongSubscription.unsubscribe() : null;
  }

}
