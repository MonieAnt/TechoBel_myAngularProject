import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listProduct : IProduct[] = []
  

  constructor() {
    let newProd : IProduct = {id: 1, name : "Apple 14"}
    this.listProduct.push({...newProd}) 
    // {...} avant newProd pour ajouter l'article à la liste, sinon il remplace celui existant.

    newProd.id = 2
    newProd.name = "Kevin Beacon"
    this.listProduct.push({...newProd})
    
    newProd.id = 3
    newProd.name = "iMac 16'"
    this.listProduct.push({...newProd})

    newProd.id = 4
    newProd.name = "AirPods"
    this.listProduct.push({...newProd})
    
    newProd.id = 5
    newProd.name = "iPad13"
    this.listProduct.push({...newProd})

    console.log(this.listProduct);
    

   }

  ngOnInit(): void {
  }

  clickDelete(idToDelete : IProduct) {
    console.log(idToDelete);
    let indexToDelete = this.listProduct.findIndex((product) => product.id == idToDelete.id)
    this.listProduct.splice(indexToDelete, 1)
  }

}

export interface IProduct {
  id: number,
  name : string
}