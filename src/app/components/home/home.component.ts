import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product;
  productDetails: Product;
  productUpdate: Product;
  flagGetProduct: boolean = false;
  flagAddProduct: boolean = false;

  deleteProduct = function (id: number) {
    if (confirm(`YOU'LL DELETE PRODUCT ID: ${id} 
               ARE YOU SURE?`)) {
      this.productService
        .delete(id).subscribe();
    }
    this.fetchData();
  };

  getProduct = function (id: number) {
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.flagGetProduct = true;
      });

  }

  updateProduct = function (id: number, product: Product) {
    this.productService
      .put(id, product).subscribe((dataUpdate: Product) => {
        this.productUpdate = dataUpdate;
        console.log(this.productUpdate);
      });
  }

  fetchData = function () {
    this.productService
      .get().subscribe((data: Product) => {
        this.products = data;
      })


  };


  ngOnInit(): void {
    this.fetchData();
  }

}
