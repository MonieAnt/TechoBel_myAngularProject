import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from "../cart/cart.component";

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productChild : IProduct = {id: 0, name: ""}

  @Output() clickOnChildDelete : EventEmitter<IProduct> = new EventEmitter<IProduct>()

  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(p:IProduct) {
    this.clickOnChildDelete.emit(p)
  }

}
