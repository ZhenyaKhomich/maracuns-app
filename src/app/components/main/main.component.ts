import {Component, NgModule} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaracunsType} from '../../types/maracuns.type';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../header/header.component.scss', '../footer/footer.component.scss']
})
export class MainComponent {
  public advantages = [
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

  public maracuns: MaracunsType[] = [
    {
      image: 'makarun1.png',
      title: 'Макарун с малиной',
      quantity: '1',
      price: '1,70'
    },
    {
      image: 'makarun2.png',
      title: 'Макарун с манго',
      quantity: '1',
      price: '1,70'
    },
    {
      image: 'makarun3.png',
      title: 'Пирог с ванилью',
      quantity: '1',
      price: '1,70'
    }, {
      image: 'makarun4.png',
      title: 'Пирог с фисташками',
      quantity: '1',
      price: '1,70'
    }
  ]

  public formObjectValue = {
    maracun: '',
    name: '',
    phone: ''
  }

  public showPresent: boolean = false;
  public phone = '+375 (29) 368-98-68';
  public hrefInstagram = 'https://instagram.com';



  public scroll(element: HTMLElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

  public clickOrder(maracun: MaracunsType, element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
    this.formObjectValue.maracun = maracun.title.toUpperCase()
  }
}
