import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() id_person : number = 0
  @Input() first_name : string = ""

  @Output() clickOnChildDelete : EventEmitter<number> = new EventEmitter<number>()
  @Output() clickOnChildUpdateFirstName : EventEmitter<{id : number, firstName : string}> = new EventEmitter<{id : number, firstName : string}>()


  triggerInputName : boolean = false
  newFirstName : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe(id_person : number)
  {
    this.clickOnChildDelete.emit(id_person)
  }

  showInput(firstName : string){
    this.newFirstName = firstName
    this.triggerInputName = !this.triggerInputName
  }


  saveOnParent(id_person : number){
    this.clickOnChildUpdateFirstName.emit({id : id_person, firstName : this.newFirstName})
    this.triggerInputName = !this.triggerInputName
  }

}
