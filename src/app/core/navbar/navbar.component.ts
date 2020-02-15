import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style/style.service';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private styleService: StyleService,
    private SpotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.styleService.addDashboardPageClass();
  }


  logout(): void {
    console.log('login out')
    this.SpotifyService.logoutUser();
  }

  ngOnDestroy(): void {
    this.styleService.clearClassList();
  }
}
