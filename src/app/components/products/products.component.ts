import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {MaracunsType} from '../../types/maracuns.type';
import {StyleButtonsDirective} from '../../directives/style-buttons.directive';
import {ProductCartComponent} from '../product-cart/product-cart.component';

@Component({
  selector: 'products-component',
  standalone: true,
  imports: [
    ProductCartComponent,
    NgForOf,
    StyleButtonsDirective,
    CurrencyPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {
  @Input() maracuns!: MaracunsType[] | null;
  @Output() clickOrderBtn = new EventEmitter<MaracunsType>();

  clickOrder(element: MaracunsType) {
    this.clickOrderBtn.emit(element);
  }
}
