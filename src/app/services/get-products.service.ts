import {Injectable} from '@angular/core';
import {MaracunsType} from '../types/maracuns.type';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() {
  }

  getProducts() {
    return [
      {
        image: 'makarun1.png',
        title: 'Макарун с малиной',
        quantity: '1',
        price: 1.70
      },
      {
        image: 'makarun2.png',
        title: 'Макарун с манго',
        quantity: '1',
        price: 1.70
      },
      {
        image: 'makarun3.png',
        title: 'Пирог с ванилью',
        quantity: '1',
        price: 1.70
      }, {
        image: 'makarun4.png',
        title: 'Пирог с фисташками',
        quantity: '1',
        price: 1.70
      }
    ]
  }
}
