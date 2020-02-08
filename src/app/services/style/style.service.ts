import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  //Removes BG image class
  clearClassList(): void {
    let classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
  }

  addRedirectPageClass(): void {
    document.body.classList.add('redirect-page');
  }

  addWelcomePageClass(): void {
    document.body.classList.add('welcome-bg-image');
  }

}
