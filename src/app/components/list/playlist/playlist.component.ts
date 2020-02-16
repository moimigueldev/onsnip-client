import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  //====================================
  //              Subscriptions
  //====================================

  playlistFollowingSubscription: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  playlistFollowingResponse;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.playlistFollowingSubscription = this.spotifyService.playlistFollowing.subscribe(pl => {
      this.playlistFollowingResponse = pl;
      console.log('playlist', pl)
    })
  }

  ngOnDestroy(): void {
    this.playlistFollowingSubscription ? this.playlistFollowingSubscription.unsubscribe() : null
  }

}
