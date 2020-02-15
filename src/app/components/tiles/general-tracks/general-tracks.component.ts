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
  }


  ngOnDestroy() {
    this.tracksSubscription ? this.tracksSubscription.unsubscribe() : null
  }
}
