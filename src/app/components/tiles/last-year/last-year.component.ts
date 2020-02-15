import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-last-year',
  templateUrl: './last-year.component.html',
  styleUrls: ['./last-year.component.scss']
})
export class LastYearComponent implements OnInit {

  @Input() bankName: number;

  tracks: number;

  tracksSubscription: Subscription;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    // this.tracksSubscription = this.spotifyService.tracksSavedLastYear.subscribe((track: number) => {
    //   this.tracks = track
    // })

    // console.log('trackss', this.bankName)
  }


  ngOnDestroy() {
    this.tracksSubscription ? this.tracksSubscription.unsubscribe() : null
  }

}
