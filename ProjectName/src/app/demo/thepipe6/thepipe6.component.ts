import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thepipe6',
  templateUrl: './thepipe6.component.html',
  styleUrls: ['./thepipe6.component.css']
})
export class Thepipes6Component implements OnInit {

  megaImportantTitle : string = ""
  endDate : Date = new Date()
  pricePromo : number = 0

  testJsonPipe : any

  constructor() { }

  ngOnInit(): void {
    this.megaImportantTitle = "En ce moment, super promos sur les formations"
    this.endDate = new Date()
    this.pricePromo = 150.04015

    this.testJsonPipe = document
  }

}