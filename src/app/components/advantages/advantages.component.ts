import {Component, Input} from '@angular/core';
import {MainComponent} from '../main/main.component';
import {AdvantagesType} from '../../types/advantages.type';
import {NgForOf} from '@angular/common';
import {SliceTextPipe} from '../../pipes/slice-text.pipe';

@Component({
  selector: 'advantages-component',
  standalone: true,
  imports: [
    NgForOf,
    SliceTextPipe
  ],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {
@Input() advantages!: AdvantagesType[];
}
