import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product";
import { AddDishComponent } from 'src/app/components/add-dish/add-dish.component';


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
  flagGetProduct: boolean = false;
  flagAddProduct: boolean = false;
  flagUpdateProduct: boolean = false;
  spinner: boolean = false;

    //delete a product
  deleteProduct = function (id: number) {
    if (confirm(`STAI PER CANCELLARE IL PRODOTTO CON ID: ${id} 
               SEI SICURO`)) {
      this.productService
        .delete(id).subscribe(
          val => {
            alert(`Prodotto eliminato correttamente`);
          },

          error => {
            alert('OPS... Si è verificato un errore durante la cancellazione');
          },

          () => {
            console.log('Cancellazione completata');
            this.fetchData();
          }
        );
    }

  };

    //get a product by ID number
  getProduct = function (id: number) {
    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.flagGetProduct = true;
      });

  }

  updateProduct = function (id: number) {

    this.productService
      .getById(id).subscribe((dataDetails: Product) => {
        this.productDetails = dataDetails;
        this.child.update(dataDetails);
      });
  }

    //get all my products
  fetchData = function () {
    this.productService
      .get().subscribe((data: Product) => {
        this.products = data;
        this.spinner = true;
      })


  };


  ngOnInit(): void {
    this.fetchData();   //call this func when start the app
  }

}
