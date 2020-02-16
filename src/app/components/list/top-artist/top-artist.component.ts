import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';
import { ArtistList } from 'src/app/share/interfaces/list';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {

  //====================================
  //              Subscriptions
  //====================================

  FavoriteArtistSubscription: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  FavoriteArtistResponse: ArtistList;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.FavoriteArtistSubscription = this.spotifyService.topArtist.subscribe((artist: ArtistList) => {
      this.FavoriteArtistResponse = artist;
    })
  }

  ngOnDestroy(): void {
    this.FavoriteArtistSubscription ? this.FavoriteArtistSubscription.unsubscribe() : null;
  }

}
