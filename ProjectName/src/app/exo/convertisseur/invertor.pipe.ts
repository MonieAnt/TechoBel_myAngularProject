import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertor'
})
export class InvertorPipe implements PipeTransform {

  transform(value: number, ...args: string[]): any {
    
    let strFinal = ""
    
    if(value != undefined) {
      strFinal = value.toString().split('').reverse().join("")
    } else {
      strFinal = "Non reconnu..."
    }
    
    return strFinal;

  }
}
