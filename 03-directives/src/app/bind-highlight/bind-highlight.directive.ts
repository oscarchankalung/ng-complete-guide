import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBindHighlight]'
})
export class BindHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
