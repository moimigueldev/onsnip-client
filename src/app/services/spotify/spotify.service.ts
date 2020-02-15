import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../../assets/keys';
import { GenreList } from '../../share/interfaces/genreList'
import { TracksBundle } from 'src/app/share/interfaces/tracks';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //SUBSCRIPTIONS
  fetchUserSubscription: Subscription;
  logoutUserSubscription: Subscription;
  loginUserSubscription: Subscription;
  getSavedUserSubscription: Subscription;

  //Subjects
  topArtist = new Subject();
  genres = new Subject<GenreList[]>();
  tracksSavedThisMonth = new Subject<number>();
  tracksSavedthisYear = new Subject<number>();
  tracksSavedLastYear = new Subject<number>();
  totalSongs = new Subject<number>();
  tracksBundle = new Subject<TracksBundle>();

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
    this.getSavedUserSubscription = this.http.post(urlRoutes['authSavedUser'], { cookie }).subscribe(data => {
      // console.log('data', data['filteredData'].tracksSavedlastYear)
      // this.topArtist.next(data['filteredData'].mostListenedArtist)

      const tracksBundle: TracksBundle = {
        tracksSavedLastYear: data['filteredData'].tracksSavedlastYear,
        tracksSavedThisYear: data['filteredData'].tracksSavedThisYear,
        tracksSavedThisMonth: data['filteredData'].tracksSavedThisMonth,
        TotalTracks: data['analytics'].totalSongs,
      }

      this.tracksBundle.next(tracksBundle)



      this.tracksSavedLastYear.next(data['filteredData'].tracksSavedlastYear)

      this.tracksSavedThisMonth.next(data['filteredData'].tracksSavedThisMonth)
      this.tracksSavedthisYear.next(data['filteredData'].tracksSavedthisYear)
      this.totalSongs.next(data['analytics'].totalSongs)
      this.genres.next(data['analytics'].topGenres)
    })


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
