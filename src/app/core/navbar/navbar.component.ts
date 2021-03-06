import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style/style.service';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  welcome = 'welcome';

  constructor(
    private styleService: StyleService,
    private SpotifyService: SpotifyService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const cookie = JSON.parse(this.cookieService.get('spotify-user'));
    this.welcome = cookie.id

  }

  onGenres() {
    console.log('click', window.location.hash)
    window.location.hash = '#bar-graph'
  }


  logout(): void {

    this.SpotifyService.logoutUser();
  }

  ngOnDestroy(): void {

  }
}
