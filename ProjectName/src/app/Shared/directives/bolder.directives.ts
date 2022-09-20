import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBolder]'
})
export class BolderDirective {


  constructor(private el : ElementRef) {

    this.el.nativeElement.style.fontWeight = "bold"

  }
}