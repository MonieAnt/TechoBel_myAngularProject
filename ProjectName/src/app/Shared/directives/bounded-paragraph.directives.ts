import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoundedParagraph]'
})
export class BoundedParagraphDirective {

  node : HTMLElement | null = null

  constructor(private el : ElementRef) {
    this.node = this.el.nativeElement
    this.node?.classList.add("animate__animated")
  }

  @HostListener("click")
  onClick(){
    this.node?.classList.add("animate__bounceIn")
  }

  @HostListener("animationend")
  onTerminated(){
    this.node?.classList.remove("animate__bounceIn")
  }

}