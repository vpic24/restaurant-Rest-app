import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product";
import { AddDishComponent } from 'src/app/add-dish/add-dish.component';
import { ChildActivationEnd } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(AddDishComponent) child: AddDishComponent;
  constructor(private productService: ProductService) { }

  products: Product;
  productDetails: Product;
  productAdd: Product;
  //btnAdd: boolean = false;
  //showForm: boolean = false;
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
   // this.btnAdd = false;
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.flagGetProduct = true;
      });

  }

  updateProduct = function (id: number){
    
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.child.update(dataDetails);

      });
  }
/*update = function(product: Product){
  this.productForm.patchValue({
    name: 'pippo'
  });
}*/

  fetchData = function () {
    //this.btnAdd = true;
    this.productService
      .get().subscribe((data: Product) => {
        this.products = data;
      })


  };


  ngOnInit(): void {
    this.fetchData();
  }

}
