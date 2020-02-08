import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private styleService: StyleService
  ) { }

  ngOnInit() {
    //adds Welcome class to body
    this.styleService.addWelcomePageClass();

  }


  onLogin(): void {
    this.spotifyService.fetchUser();
  }

  ngOnDestroy() {
    this.styleService.clearClassList()
  }

}
