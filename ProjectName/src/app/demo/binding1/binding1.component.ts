import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding1',
  templateUrl: './binding1.component.html'
})
export class Binding1Component implements OnInit {

  messageIntro : string = ""

  constructor() { }

  ngOnInit(): void {
    this.messageIntro = "Bonjour à tous, bande de pignoufs"
  }

}