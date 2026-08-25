import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  highlightColor = input<string>('rgb(0, 128, 0)');

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor());
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
