import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NumberPhonePipe} from '../../pipes/number-phone.pipe';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [NumberPhonePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() phone!: string;
@Output() clickLinkHeader = new EventEmitter<string>();

clickLinks(element:string) {
  console.log(element)
  this.clickLinkHeader.emit(element);
}
}
