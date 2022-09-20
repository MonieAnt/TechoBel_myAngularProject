import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToasterPerso]'
})
export class ToasterPersoDirective {



  constructor(private el : ElementRef) { }


  @HostListener("click")
  onClick()
  {
    let toast : HTMLDivElement = document.createElement("div")
    toast.style.height = "50px" 
    toast.style.width = "200px" 
    toast.style.backgroundColor = "grey"
    toast.style.color = "white"
    toast.style.padding = "15px"
    toast.style.borderRadius = "8px"
    toast.style.position = "absolute"
    toast.style.top = "50px"
    toast.style.left = "20px"
    toast.style.float = "left"
    toast.innerText = "Super click directive"
    toast.id = "monToast"
    toast.classList.add("animate__animated", "animate__backInDown")


    document.body.prepend(toast)

    setTimeout(() => {
      let toast = document.getElementById('monToast')
      toast?.classList.add("animate__animated", "animate__backOutDown")

      setTimeout(() => {
        let toast = document.getElementById('monToast')
        toast?.remove()
      },1000)
      
    }, 3000);


  }

}