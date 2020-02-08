import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  token

  constructor(
    private spotifyService: SpotifyService,
    private styleService: StyleService
  ) { }

  ngOnInit() {
    //Adds the bg class for this components
    document.body.classList.add('redirect-page');

    // PARSES HASHSTRING FROM URL AND SENDS HASH TO SERVER
    this.parseHashUrl();
  }

  parseHashUrl() {
    let hashString = window.location.hash.toString()
    const start = hashString.indexOf('=') + 1;
    const end = hashString.indexOf('&');

    this.token = hashString.slice(start, end)
    this.spotifyService.loginUser(this.token)
  }


  ngOnDestroy() {
    this.styleService.clearClassList()

  }

}
