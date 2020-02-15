import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-general-tracks',
  templateUrl: './general-tracks.component.html',
  styleUrls: ['./general-tracks.component.scss']
})
export class GeneralTracksComponent implements OnInit {

  @Input() tracks: number;
  @Input() name: number;
  @Input() bgColor: string;

  // tracks: number;

  tracksSubscription: Subscription;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.tracksSubscription = this.spotifyService.tracksSavedLastYear.subscribe((track: number) => {
      this.tracks = track
    })

    console.log('trackss', this.tracks, this.name, this.bgColor)
  }


  ngOnDestroy() {
    this.tracksSubscription ? this.tracksSubscription.unsubscribe() : null
  }
}
