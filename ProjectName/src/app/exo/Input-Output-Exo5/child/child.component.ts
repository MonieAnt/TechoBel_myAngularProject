import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-child2]',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponentExo implements OnInit {

  @Input() id : number = 0
  @Input() user_name : string = ""
  @Input() last_name : string = ""
  @Input() first_name : string = ""
  @Input() country : string = ""
  @Input() city: string = ""
  @Input() btc_adress : string = ""
  @Input() eth_adress : string = ""

  @Output() clickOnChildDelete : EventEmitter<number> = new EventEmitter<number>()
  @Output() clickOnChildUpdateFirstName : EventEmitter<{id : number, first_name : string}> = new EventEmitter<{id : number, first_name : string}>()


  triggerInputName : boolean = false
  newFirstName : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  showInput(first_name : string){
    this.newFirstName = first_name
    this.triggerInputName = !this.triggerInputName
  }

  saveOnParent(id_person : number){
    this.clickOnChildUpdateFirstName.emit({id : id_person, first_name : this.newFirstName})
    this.triggerInputName = !this.triggerInputName
  }

}
