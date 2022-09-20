import { Component, OnInit } from '@angular/core';
import { datas } from '../data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listPerson : { id : number, first_name : string}[] = datas

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteChildById(id_person : number){
    //alert("je veux delete l'id nb° : " + id_person)
    let indexToDelete = this.listPerson.findIndex((person) => person.id == id_person)
    this.listPerson.splice(indexToDelete, 1)
  }

  updateChildFirstName(updatePerson : {id : number, firstName : string}){
    let indexToUpdate = this.listPerson.findIndex((person) => person.id == updatePerson.id)
    this.listPerson[indexToUpdate].first_name = updatePerson.firstName
  }


  reverseSort(){
    this.listPerson.reverse()
  }

}
