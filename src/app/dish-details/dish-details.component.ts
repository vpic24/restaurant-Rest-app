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

  updateProduct = function (product: Product) {
    this.productService
      .update(product.id).subscribe((dataUpdate: Product) => {
        this.productDetails = dataUpdate;
        console.log(this.productDetails);
      });
  }

  ngOnInit(): void {
  }

}
