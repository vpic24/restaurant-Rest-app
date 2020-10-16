import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Input() productDetails: Product;
  products: Product;
  flagBtn: boolean = false;
  
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    desc: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('[0.0-9.9]+')]),
  });

  onSubmit = function () {
    const name = this.productForm.get('name').value;
    const desc = this.productForm.get('desc').value;
    const type = this.productForm.get('type').value;
    const price = this.productForm.get('price').value;

    if (this.productForm.valid) {
      this.create({ name, desc, type, price });
    }
    else
      alert("error");
    window.location.reload();
  }

  create(product: Product) {
    this.productService.create(product).subscribe(

      val => {
        alert(`product has been created correctly`);
      },

      error => {
        console.error('operation failed');
      },

      () => { console.log('Creation complete'); }
    );
  }


  update = function (product: Product) {
    this.flagBtn = true;

    this.productForm.setValue({
      name: product.name,
      desc: product.desc,
      type: product.type,
      price: product.price
    });
  }

  updateDone = function (product: Product) {
    if (confirm(`YOU'LL UPDATE PRODUCT ID: ${product.id} 
               ARE YOU SURE?`)) {
      this.productService
        .update(this.productForm.value, product.id).subscribe();
      alert(`DISH ID: ${product.id} UPDATED`);
      }
    window.location.reload();
  }

  resetForm() {
    this.productForm.reset();
  }

  ngOnInit(): void {
  }

}
