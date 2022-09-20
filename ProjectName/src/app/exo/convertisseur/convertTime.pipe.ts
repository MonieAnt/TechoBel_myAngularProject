import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

// Version avec Moment.js Importé pour convertir les Dates automatiquement.

@Pipe({
  name: 'secondToYearMonthDays'
})
export class SecondToYearMonthDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment.duration(value, 'seconds').format('Y [years] M [months] D [days] HH [hours] mm [minutes] ss [seconds]');
  }

}




// Version Algo

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'convertTimer'
// })
// export class ConvertTimerPipe implements PipeTransform {
    

//   transform(value: number, ...args: any[]): string {

//     let tmpTotal = value
//     let textReturn = ""
//     let Jours
//     let Heures
//     let Minutes
//     let Secondes

//     // Convertisseur de Temps :
//     Jours = Math.floor(tmpTotal/86400)
//     Heures = Math.floor((tmpTotal / 3600) % 24)
// 	  Minutes = Math.floor((tmpTotal / 60) % 60)
// 	  Secondes = Math.floor(tmpTotal % 60)

//     textReturn = `Le convertisseur de ${value} en JJ:HH:mm:ss est : ${Jours} J ${Heures} H ${Minutes} min et ${Secondes} sec`
    
//     return textReturn
//   }

// }