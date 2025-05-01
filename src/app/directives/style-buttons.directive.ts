import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[styleButtons]',
  standalone: true,
})
export class StyleButtonsDirective {

  constructor(private element: ElementRef) {}

  @Input() styleButtonsDirectiveColorDefault: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)'
  @Input() styleButtonsDirectiveColorHover: string = '#ef6c7e'

  @HostListener('mouseover')
  OnMouseOver() {
    this.element.nativeElement.style.background = this.styleButtonsDirectiveColorHover;
  }

  @HostListener('mouseout')
  OnMouseOut() {
    this.element.nativeElement.style.background = this.styleButtonsDirectiveColorDefault;
  }

}
