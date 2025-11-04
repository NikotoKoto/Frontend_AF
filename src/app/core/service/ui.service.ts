import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  isMenuOpen = signal(false);
  isBasketOpen = signal(false);



 

    toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openMenu() {
    this.isMenuOpen.set(true);
  }

}
