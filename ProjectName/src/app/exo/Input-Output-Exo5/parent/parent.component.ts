import { Component, OnInit } from '@angular/core';
import data_exo5 from "src/app/exo/Input-Output-Exo5/data_exo5.json";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponentExo implements OnInit {

  myListPersonExo : { id : number, user_name: string, last_name: string, first_name: string, country: string, city: string, btc_adress: string}[] = data_exo5;

  constructor() { 
  }

  ngOnInit(): void {

    console.dir(data_exo5);
    
  }

  reverseSort(){
    this.myListPersonExo.reverse()
  }

  updateChildFirstName(updatePerson : {id : number, first_name : string}){
    let indexToUpdate = this.myListPersonExo.findIndex((person) => person.id == updatePerson.id)
    this.myListPersonExo[indexToUpdate].first_name = updatePerson.first_name
  }


}
