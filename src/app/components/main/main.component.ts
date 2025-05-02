import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaracunsType} from '../../types/maracuns.type';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {GetProductsService} from '../../services/get-products.service';
import {SumProductsBasketService} from '../../services/sum-products-basket.service';
import {AdvantagesComponent} from '../advantages/advantages.component';
import {AdvantagesType} from '../../types/advantages.type';
import {ProductsComponent} from '../products/products.component';
import {StyleButtonsDirective} from '../../directives/style-buttons.directive';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    FooterComponent,
    HeaderComponent,
    AdvantagesComponent,
    ProductsComponent,
    DecimalPipe,
    StyleButtonsDirective
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../header/header.component.scss', '../footer/footer.component.scss']
})
export class MainComponent {

  constructor(public getMaracuns: GetProductsService,
              public getSumBasket: SumProductsBasketService) {}

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Честный продукт',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Лучшие продукты',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  public maracuns: MaracunsType[] | null = null;
  public showPresent: boolean = true;
  public phone = '375293689868';


  ngOnInit() {
    this.maracuns = this.getMaracuns.getProducts();
  }

  public formObjectValue = {
    maracun: '',
    name: '',
    phone: ''
  }

  @ViewChild('products') products!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('order') order!: ElementRef;

  public scroll(el: string, element?: HTMLElement) {
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    } else if (el) {
      if (el === 'products') {
        this.products.nativeElement.scrollIntoView({behavior: "smooth"});
      } else if (el === 'about') {
        this.about.nativeElement.scrollIntoView({behavior: "smooth"});
      } else if (el === 'order') {
        this.order.nativeElement.scrollIntoView({behavior: "smooth"});
      }
    }
  }

  public clickOrder(maracun: MaracunsType, element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
    this.formObjectValue.maracun = maracun.title.toUpperCase();
    this.getSumBasket.colInBasket++;
    this.getSumBasket.sumBasket += maracun.price;
    alert(`${maracun.title}, добавлен в корзину!`)
  }
}
