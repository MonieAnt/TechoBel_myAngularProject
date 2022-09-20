import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes7',
  templateUrl: './custompipes7.component.html',
  styleUrls: ['./custompipes7.component.css']
})
export class Custompipes7Component implements OnInit {

  nb : number = 0
  monPow : number = 0

  constructor() { }

  ngOnInit(): void {
    //mon user veux quelques chose de perso...
    this.monPow = 7 //par exemple
  }

}