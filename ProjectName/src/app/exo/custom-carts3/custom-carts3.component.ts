import { Component, OnInit } from '@angular/core';
import { toast } from 'materialize-css';
import { Toast } from 'src/app/Shared/toasts/materializeToasts';


@Component({
  selector: 'app-custom-carts3',
  templateUrl: './custom-carts3.component.html',
  styleUrls: ['./custom-carts3.component.css']
})
export class Exos3CustomCartsComponent implements OnInit {

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
      
    if(prodToAdd){
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