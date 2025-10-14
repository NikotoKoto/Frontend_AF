import { Injectable, signal } from '@angular/core';
import { BASKET, basketItem } from '../data/basket/basket-data';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  isMenuOpen = signal(false);
  isBasketOpen = signal(false);

  basketData = signal<basketItem[]>(BASKET);

  menuBasket() {
    this.isBasketOpen.update(v => !v);
  }

    toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openMenu() {
    this.isMenuOpen.set(true);
  }
  constructor() { }
}
