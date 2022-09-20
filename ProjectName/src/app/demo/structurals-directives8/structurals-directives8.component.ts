import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurals-directives8',
  templateUrl: './structurals-directives8.component.html',
  styleUrls: ['./structurals-directives8.component.css']
})
export class StructuralsDirectives8Component implements OnInit {

  opened : boolean = false
  datasList : string[] = ["pommes", "poires", "bananes", "oranges"]
  userList : { name : string, role : string}[] = [
    { name : "Loic", role : "admin"},
    { name : "Dorian", role : "modo"},
    { name : "Camille", role : "casu"},
    { name : "Nicolas", role : "casu"},
    { name : "David", role : "casu"}
  ] 

  product : {} = { name : "Un truc", price : 15, desc : "tutu"}

  constructor() { }

  ngOnInit(): void {
  }

  triggerParagraph()
  {
    this.opened = !this.opened
  }

}
