import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {

  nb : number = 0
  nbSecondUser? : number = undefined
  toCurrency? : string = undefined

  constructor() { }

  ngOnInit(): void {
    let elem = document.querySelectorAll('select')
    //M.FormSelect.init(elem)
  }

}
