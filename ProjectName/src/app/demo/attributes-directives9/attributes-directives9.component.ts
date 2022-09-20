import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-directives9',
  templateUrl: './attributes-directives9.component.html',
  styleUrls: ['./attributes-directives9.component.css']
})

export class AttributesDirectives9Component implements OnInit {

  isDisabled : boolean = true
  textVisible : boolean = true

  minForRange : number = 10
  maxForRange : number = 100
  currentRange : number = 50

  first : string = "Loïc"
  last : string = "Baudoux"

  maClass : string = "green-text text-accent-1"


  mesClass : {} = {
    'green-text text-accent-1' : true,
    'lime-text text-lighten-1' : true,
    'deep-orange-text text-lighten-3' : false
  }

  customBlocP : string[] = [
    'hoverable',
    'left-align',
    'deep-orange lighten-3'
  ]


  country : string = "Aucun"

  mesPropsCss : {} = {'background-color' : 'chartreuse', 'font-size' : '25px'}

  userList : { name : string, gender : string }[] = [
    { name : "Loic", gender : "M"},
    { name : "Pieter", gender : "M"},
    { name : "Sarah", gender : "F"},
    { name : "Marie", gender : "F"},
    { name : "Andrès", gender : "NC"},
  ]

  constructor() { }

  ngOnInit(): void {
  }


  triggerDisabledInput(){
    this.isDisabled = !this.isDisabled
  }


  afficheText(){
    this.textVisible = false
  }


  getClass(){

    switch(this.country)
    {
      case "UK":
        return "red darken-3 blue-text text-lighten-1"
      case "BE":
        return "yellow-text black"
      case "UKR":
        return "lime-text light-blue accent-4"
      default : 
        return ""

    }

  }


  setCountry(country : string){
    this.country = country
  }


  colorGender(gender : string)
  {
    switch(gender)
    {
      case 'M' :
        return 'blue-grey darken-4'
      case 'F' :
        return 'pink darken-4'
      case 'NC' : 
        return 'deep-orange darken-1'
      default:
        return ""
    }
  }

}
