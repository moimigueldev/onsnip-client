import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { SpotifyService } from 'src/app/services/spotify.service';

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
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    document.body.classList.add('welcome-bg-image');

  }


  onLogin(): void {
    console.log('hello')
    // this.userService.getUserData();
  }

  ngOnDestroy() {

    //Removes BG image class
    let classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
  }

}
