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

  /*update = function(productAdd){
    this.productForm.patchValue({
      name: productAdd.name
    });
  }*/
  
  update = function (product: Product) {
    
    //console.log(product);
    
    //TODO--- fatto ---- devo riuscire a passare productForm dal componente figlio (add-dish) al componente padre(home)
    this.productForm.setValue({
      name: product.name,
      desc: product.desc,
      type: product.type,
      price: product.price
    });
    
    console.log(this.productForm.value);       
    
  }
    updateDone = function(product: Product){
    //TODO put del prodotto
   this.productService
      .update(this.productForm.value, product.id).subscribe();
      alert(`PRODOTTO ID: ${product.id} aggiornato`);
    }



        
    

  
  

  resetForm() {
    this.productForm.reset();
  }


  ngOnInit(): void {
  }

}
