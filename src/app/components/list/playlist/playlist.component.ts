import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Playlist } from 'src/app/share/interfaces/list';

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
  playlistFollowingResponse: Playlist;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.playlistFollowingSubscription = this.spotifyService.playlistFollowing.subscribe((pl: Playlist) => {
      this.playlistFollowingResponse = pl;

    })
  }

  ngOnDestroy(): void {
    this.playlistFollowingSubscription ? this.playlistFollowingSubscription.unsubscribe() : null
  }

}
