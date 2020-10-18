import { Component, Input, OnInit } from '@angular/core';
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Input() productDetails: Product;

  backHome() {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
