import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective {

  //el -> ElementRef -> element du dom référent la ou la directive à été placée
  constructor(private el : ElementRef) {
        this.el.nativeElement.style.color = "#eceff1"
        this.el.nativeElement.classList += "green accent-4"
        let blocLegend = document.createElement("b")
        blocLegend.innerText = " -- Ce text est issu du lorem Ipsum -- "
        blocLegend.style.color = "white"
        this.el.nativeElement.after(blocLegend) 
  }

}