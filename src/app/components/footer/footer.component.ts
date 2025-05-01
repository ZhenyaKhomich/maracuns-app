import {Component, Input} from '@angular/core';
import {NumberPhonePipe} from '../../pipes/number-phone.pipe';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [
    NumberPhonePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() phone!: string;
  public hrefInstagram = 'https://instagram.com';
}
