import { Component, OnInit } from '@angular/core';
import { Toast } from "src/app/Shared/toasts/materializeToasts";

@Component({
  selector: 'app-customs-directives4',
  templateUrl: './customs-directives4.component.html',
  styleUrls: ['./customs-directives4.component.css']
})
export class CustomsDirectives4Component implements OnInit {

  listProducts : IProduct[] = [
    { id : 15, name : "produit 1", priceU : 15.42 },
    { id : 27, name : "produit 2", priceU : 27.42 },
    { id : 36, name : "produit 3", priceU : 36.42 }
  ]

  cart : ICart[] = []
  
  totalTvac : number = 0
  totalHtva : number = 0

  constructor() { }

  ngOnInit(): void {
  }


  addProduct(idToAdd : number){

    let isIt : boolean = false
    let newProd : ICart = new Cart()
    let prodToAdd : IProduct | undefined = this.listProducts.find(elem => elem.id == idToAdd)
    //ici js, interprete que la predicate (fct), est courte ! donc ça fonction avec elem => elem.quelqueschose compare autrechose
    //en version lambda longue vous auriez du re-écrire toute la fct de find comme ceci
    // let prodToAdd = this.listProducts.find((elem) => {
      //   if(elem.id == idToAdd)
      //    return elem
      //   return null
      // })
      
    if(prodToAdd)
    {
      newProd.product = {...prodToAdd}

      if(this.cart.length >= 1)
      {
        this.cart.forEach((item) => {

          if(item.product.id == idToAdd){
            item.qty += 1
            isIt = true
          }
        })

        if(!isIt)
          this.cart.push(newProd)
      }
      else
        this.cart.push(newProd)

      Toast.addProduct()
    }


    this.cart.forEach((item) => {
      this.totalHtva += item.qty * item.product.priceU
    })

    this.totalTvac = this.totalHtva * 1.21

  }


  removeProd(idToRemove : number){


    let indexToRemove : number = this.cart.findIndex((item) => {
      if(item.product.id == idToRemove)
        return true
      return false
    })

    if(indexToRemove != -1){
      this.cart.splice(indexToRemove,1)
      Toast.deleteProduct()
    }
  }

}

interface IProduct{
  id : number
  name : string
  priceU : number
}

class Product implements IProduct{
  id: number = 0;
  name: string = "";
  priceU : number = 0

}


interface ICart{
  qty : number
  product : IProduct
}

class Cart implements ICart{
  qty: number = 1;
  product: IProduct = new Product;
}


/*
Exos pour 13h : 
Créer une directive sur votre exos deux le panier de courses que vous avez copier coller dans un compos exos 3.
Inventer cette directive pour qu'elle aie un effet sur les articles ajouté, les mettre au minimum en bolded
Dans une autre directive préparer un event au click dans la directive. Ce click Créera une div dans le bas du body de la page et affichera "super click directive".
Il apparaîtra en animation simple css et disparaitra également peux importe la manière ! 
Éclatez vous un max en les créant !
*/
