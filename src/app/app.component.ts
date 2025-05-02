import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru-RU');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'}
  ]
})

export class AppComponent {}
