import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exos6Service {

  private readonly messageResolve = "Le texte a bien été transformé"

  constructor() {}

  transformText(text : string) : Promise<{message : string, transformText : string}>{
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        text = text.toUpperCase()
        text = text.split("").reverse().join("")
        resolve({ message : this.messageResolve, transformText : text })
      }, 2500)

    })
  }
}