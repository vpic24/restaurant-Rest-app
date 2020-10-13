import { Component, OnInit } from '@angular/core';
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

  products: Product;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    desc: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
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
    //window.location.reload();
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

  resetForm() {
    this.productForm.reset();
  }


  ngOnInit(): void {
  }

}
