import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {StyleButtonsDirective} from '../../directives/style-buttons.directive';
import {MaracunsType} from '../../types/maracuns.type';

@Component({
  selector: 'product-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    StyleButtonsDirective
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() maracun!: MaracunsType;
  @Input() i!: number;
  @Output() clickOrderBtnProductCart = new EventEmitter<MaracunsType>();

  clickOrderProductsCart(element: MaracunsType) {
    console.log(element)
    this.clickOrderBtnProductCart.emit(element);
  }
}
