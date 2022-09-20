import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding2',
  templateUrl: './two-ways-binding2.component.html',
  styleUrls: ['./two-ways-binding2.component.css']
})
export class TwoWaysBinding2Component implements OnInit {

  var1 : boolean = true
  var2 : string = ""
  var3 : number = 0

  login : string = ""
  mdp : string = ""

  constructor() { }

  ngOnInit(): void {
    console.log(this.login)
    console.log(this.mdp)
  }

}
