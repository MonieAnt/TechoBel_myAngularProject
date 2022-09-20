import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Toast } from '../toasts/materializeToasts';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input()
  defaultLiner : any

  @Input()
  defaultColor : any

  @Input()
  appHightlight : any

  constructor(private el : ElementRef) {
    let icon = document.createElement("i")
    icon.className = "material-icons"
    icon.innerText = "content_copy"
    this.el.nativeElement.after(icon)
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.el.nativeElement.style.color = this.defaultColor
    this.el.nativeElement.style.backgroundColor = this.defaultLiner
    this.el.nativeElement.style.cursor = this.appHightlight
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.color = null
    this.el.nativeElement.style.backgroundColor = null
    this.el.nativeElement.style.cursor = null
  }

  @HostListener("click")
  onMouseClick(){
    let text = this.el.nativeElement.innerText
    navigator.clipboard.writeText(text).then(() => {
    Toast.copyText()
    })
  }

}
