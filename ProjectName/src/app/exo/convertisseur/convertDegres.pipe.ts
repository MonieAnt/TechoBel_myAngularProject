import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDegres'
})
export class ConvertDegresPipe implements PipeTransform {
    

  transform(value: number, ...args: any[]): string {

    let degreC = value
    let textReturn = ""
    let degreF

    // Convertisseur de Temps :
    degreF = ((degreC * 9 / 5) + 32)

    textReturn = `${value}°C = ${degreF}°F`
    
    return textReturn
  }

}