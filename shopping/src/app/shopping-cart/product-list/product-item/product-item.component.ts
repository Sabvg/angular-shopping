import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { SendService } from '../../../services/send.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private msg: SendService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.msg.sendMsg(this.productItem);
  }

}
