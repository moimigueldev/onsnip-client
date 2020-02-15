import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { TracksBundle, FavoriteTrack } from 'src/app/share/interfaces/tracks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  //====================================
  //              Subscriptions
  //====================================

  tracksBundleSubscription: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  tracksBundleResponse: TracksBundle;



  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getSavedUser();

    this.tracksBundleSubscription = this.spotifyService.tracksBundle.subscribe((tracks: TracksBundle) => {
      // console.log('tracks', tracks)
      this.tracksBundleResponse = tracks;
    });


  }


  logout(): void {
    this.spotifyService.logoutUser();
  }

  ngOnDestroy(): void {
    this.tracksBundleSubscription ? this.tracksBundleSubscription.unsubscribe() : null;
  }

} 
