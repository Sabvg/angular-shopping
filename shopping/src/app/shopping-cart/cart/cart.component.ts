import { Component, OnInit } from '@angular/core';
import { SendService } from '../../services/send.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Producto 1', quantity: 4, price: 100 },
    // { id: 2, productId: 3, productName: 'Producto 2', quantity: 7, price: 50 },
    // { id: 3, productId: 2, productName: 'Producto 3', quantity: 2, price: 20 },
    // { id: 4, productId: 4, productName: 'Producto 4', quantity: 5, price: 80 }
  ];

  cartTotal = 0;

  constructor(private msg: SendService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let productExists = false;

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      } 
    }
    if(!productExists) {
      this.cartItems.push( {
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      });

    }

    this.cartTotal = 0;

    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });
  }

}
