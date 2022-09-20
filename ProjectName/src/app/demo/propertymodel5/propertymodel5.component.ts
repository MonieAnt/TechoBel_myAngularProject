import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertymodel5',
  templateUrl: './propertymodel5.component.html',
  styleUrls: ['./propertymodel5.component.css']
})
export class Propertymodel5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  okLaDate(dateUser : string)
  {
    let dateUserR : string = dateUser

    if(!dateUserR)
      dateUserR = new Date().toDateString()

    // M.toast({html: dateUserR})
  }

}