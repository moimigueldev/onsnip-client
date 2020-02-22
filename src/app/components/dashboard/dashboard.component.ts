import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { TracksBundle, FavoriteTrack } from 'src/app/share/interfaces/tracks';
import { Subscription } from 'rxjs';
import { StyleService } from 'src/app/services/style/style.service';

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
  finishedLoadingSubscription: Subscription;



  //====================================
  //              GLOBALS
  //====================================
  tracksBundleResponse: TracksBundle;
  finishedLoading = false;
  display = 'd-none';


  constructor(
    private spotifyService: SpotifyService,
    private styleService: StyleService
  ) { }

  ngOnInit(): void {

    this.styleService.addDashboardPageClass();

    this.spotifyService.getSavedUser();

    this.tracksBundleSubscription = this.spotifyService.tracksBundle.subscribe((tracks: TracksBundle) => {
      // console.log('tracks', tracks)
      this.tracksBundleResponse = tracks;
    });

    // displays dashboard when data is loaded
    this.finishedLoadingSubscription = this.spotifyService.finishedLoading.subscribe((data: boolean) => {
      this.finishedLoading = data;
      this.display = 'd-block'
    })


  }


  logout(): void {
    this.spotifyService.logoutUser();
  }

  ngOnDestroy(): void {
    this.tracksBundleSubscription ? this.tracksBundleSubscription.unsubscribe() : null;
    this.finishedLoadingSubscription ? this.finishedLoadingSubscription.unsubscribe() : null;
    this.styleService.clearClassList();
  }

} 
