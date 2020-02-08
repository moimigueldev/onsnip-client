import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserCookieGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // CHECKING IF USER COOKIE EXIST
    const doesCookieExist = this.cookieService.check('spotify-user')
    return doesCookieExist ? this.router.navigate(['/dashboard']) : true

  }

}
