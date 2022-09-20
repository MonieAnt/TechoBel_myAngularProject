import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  nb1Input : number = 0
  nb2Input : number = 0
  res : number = 0

  constructor() {
   }

  ngOnInit(): void {
      
  }

  // *************  CORRECTIF :
  add()
  {
    this.res = Number(this.nb1Input) + Number(this.nb2Input)
    this.nb1Input = 0
    this.nb2Input = 0
  }

  rem(){
    this.res = Number(this.nb1Input) - Number(this.nb2Input)
    this.nb1Input = 0
    this.nb2Input = 0

  } 

  multi(){
    this.res = Number(this.nb1Input) * Number(this.nb2Input)
    this.nb1Input = 0
    this.nb2Input = 0

  }

  div(){
    this.nb2Input = (Number(this.nb2Input) == 0)? 1 : this.nb2Input
    this.res = Number(this.nb1Input) / this.nb2Input
    this.nb1Input = 0
    this.nb2Input = 0

  }



  // // Fonction Calculatrice :
  // calc(){
  //   let nb1Input = (<HTMLInputElement>document.getElementById('nb1')).value;
  //   let num1Value = parseInt(nb1Input)
  //   let nb2Input = (<HTMLInputElement>document.getElementById('nb2')).value;
  //   let num2Value = parseInt(nb2Input);
  //   let operator = (<HTMLInputElement>document.getElementById('operator')).value;
  
  //   if(nb1Input == '' || nb2Input == '' || operator == 'undefined'){
  //     console.log('invalid')
  //   }
  //   else{
  //     let calculate;
  //     if(operator == 'add'){
  //     calculate = num1Value + num2Value;
  //     }
  //     else if(operator == 'min'){
  //       calculate = num1Value - num2Value;
  //     }
  //     else if(operator == 'mul'){
  //       calculate = num1Value * num2Value;
  //     }
  //     else if(operator == 'div'){
  //       calculate = num1Value / num2Value;
  //     }
  
  //     (<HTMLInputElement>document.getElementById('final-result')).innerHTML = calculate;
  //     }
  // }

  // resetBtn(){
  //   var r = document.getElementById('final-result').innerHTML = '';
  
  //   (<HTMLInputElement>document.getElementById('number1')).value = '';
  //   (<HTMLInputElement>document.getElementById('number2')).value = '';
    
  //   (<HTMLInputElement>document.getElementById('operator')).value = 'undefined'
  // }

}
