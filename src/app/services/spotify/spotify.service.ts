import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../../assets/keys';
import { GenreList } from '../../share/interfaces/genreList'
import { TracksBundle, FavoriteTrack } from '../../share/interfaces/tracks';
import { ArtistList, TopSongs } from '../../share/interfaces/list';





@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnDestroy, OnInit {

  //SUBSCRIPTIONS
  fetchUserSubscription: Subscription;
  logoutUserSubscription: Subscription;
  loginUserSubscription: Subscription;
  getSavedUserSubscription: Subscription;

  //Subjects
  favoriteSong = new Subject<TopSongs>();
  genres = new Subject<GenreList[]>();
  tracksBundle = new Subject<TracksBundle>();
  ArtistFollowing = new Subject<ArtistList>();
  topSongs = new Subject<TopSongs>();
  topArtist = new Subject<ArtistList>();
  playlistFollowing = new Subject();



  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

  }



  fetchUser(): void {
    this.fetchUserSubscription = this.http.get(urlRoutes['authLogin'])
      .subscribe(data => {
        data['url'] ? window.location.href = data['url'] : console.log('error fetching user', data)

      })
  }



  loginUser(token): void {
    this.loginUserSubscription = this.http.post(urlRoutes['authLoginUser'], { token }).subscribe(data => {
      this.cookieService.set('spotify-user', JSON.stringify(data), 24 * 60 * 60 * 1000)
      this.router.navigate(['/dashboard'])
    })
  }



  // THIS ONE
  getSavedUser(): void {
    let cookie = this.cookieService.get('spotify-user')

    cookie = JSON.parse(cookie)
    this.getSavedUserSubscription = this.http.post(urlRoutes['authSavedUser'], { cookie }).subscribe((data: any) => {


      console.log('data', data['analytics'])

      this.playlistFollowing.next(data['analytics'].playlist)
      this.topArtist.next(data['analytics'].topArtist)
      this.favoriteSong.next(data['analytics'].topTracks[0])
      this.tracksBundle.next(this.bundleUpTracks(data))
      this.ArtistFollowing.next(data['analytics'].artistFollowing)
      this.topSongs.next(data['analytics'].topTracks)
      this.genres.next(data['analytics'].topGenres)
    })


  }






  private bundleUpTracks(data: any): TracksBundle {
    const tracksBundle: TracksBundle = {
      tracksSavedLastYear: data['filteredData'].tracksSavedlastYear,
      tracksSavedThisYear: data['filteredData'].tracksSavedThisYear,
      tracksSavedThisMonth: data['filteredData'].tracksSavedThisMonth,
      totalTracks: data['analytics'].totalSongs,
      favoriteGenre: data['analytics'].topGenres[0]
    }

    return tracksBundle;
  }


  logoutUser(): void {
    this.logoutUserSubscription = this.http.get(urlRoutes['authLogout'], { responseType: 'text' }).subscribe(data => {
      this.cookieService.delete('spotify-user')
      this.router.navigate(['/'])
    })
  }


  ngOnDestroy(): void {
    this.fetchUserSubscription ? this.fetchUserSubscription.unsubscribe() : null;
    this.loginUserSubscription ? this.loginUserSubscription.unsubscribe() : null;
    this.getSavedUserSubscription ? this.getSavedUserSubscription.unsubscribe() : null;
    this.logoutUserSubscription ? this.logoutUserSubscription.unsubscribe() : null;

  }


}
