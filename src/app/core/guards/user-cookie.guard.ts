import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCookieGuard implements CanActivate {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const doesCookieExist = this.cookieService.check('spotify-user')

    return doesCookieExist ? this.router.navigate(['/dashboard']) : true

  }

}
