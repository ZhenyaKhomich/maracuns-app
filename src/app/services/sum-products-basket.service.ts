import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumProductsBasketService {
  constructor() { }
  public colInBasket: number = 0;
  public sumBasket: number = 0;
}
