import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

   //args[0] -> currency en str 3 lettres (USD, RUB, JPY)
   transform(value: number | undefined, ...args: unknown[]): string {

    let strFinal = ""
    let taux_EUR_USD = 1.014
    let taux_EUR_BTC = 0.000046
    let taux_EUR_ETH = 0.000046
    
    if(value != undefined)
    {
      if(args[0] == "USD")
        strFinal = (value * taux_EUR_USD).toString()

      if(args[0] == "BTC")
        strFinal = (value * taux_EUR_BTC).toString()

      if(args[0] == "ETH")
        strFinal = (value * taux_EUR_ETH).toString()
    }
    else
    {
      strFinal = "Non reconnu..."
    }
    
       
    return strFinal;
  }

}
