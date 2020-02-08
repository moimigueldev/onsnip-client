import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  //Removes BG image class
  clearClassList() {
    let classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
  }
}
