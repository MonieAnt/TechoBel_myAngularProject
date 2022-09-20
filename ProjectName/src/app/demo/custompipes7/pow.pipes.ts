import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  //si args[0] -> c'est la puissance à appliquée
  //si args[1] -> true/false si on veux appliqué une racine carrée sur le res...

  transform(value: number, ...args: any[]): string {

    let tmpValue = value
    let power = 2
    let textReturn = ""
    
    //pow perso
    if(args[0])
      power = args[0]

    tmpValue = Math.pow(tmpValue, power)

    textReturn = `la puissance de ${value} sur ${power} vaut ${tmpValue}`

    //racine
    if(args[1]){
      if(args[1] == true){
        tmpValue = Math.sqrt(tmpValue)
        textReturn = `la racine de 2 sur la valeur powered : ${value} exp : ${power} est de = ${tmpValue}`
      }
    }
    
    console.log(args)
    return textReturn
  }

}