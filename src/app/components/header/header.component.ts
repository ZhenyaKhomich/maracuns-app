import { Component } from '@angular/core';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
