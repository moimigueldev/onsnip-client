import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../../assets/keys';
import { GenreList } from '../../share/interfaces/genreList'
import { TracksBundle, FavoriteTrack } from '../../share/interfaces/tracks';
import { ArtistList } from '../../share/interfaces/list';





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
  favoriteSong = new Subject();
  genres = new Subject<GenreList[]>();
  tracksBundle = new Subject<TracksBundle>();
  ArtistFollowing = new Subject();



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

      // console.log('data', data['analytics'].artistFollowing)


      this.favoriteSong.next(this.bundleFavoriteTrack(data))
      this.tracksBundle.next(this.bundleUpTracks(data))
      this.ArtistFollowing.next(data['analytics'].artistFollowing)
      this.genres.next(data['analytics'].topGenres)
    })


  }



  private bundleFavoriteTrack(track: any): FavoriteTrack {

    const song: FavoriteTrack = {
      name: track['analytics'].topTracks[0].name,
      image: track['analytics'].topTracks[0].album.images[track['analytics'].topTracks[0].album.images.length - 1].url,
      album: track['analytics'].topTracks[0].album.name
    }

    return song
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
