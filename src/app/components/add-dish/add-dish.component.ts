import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';


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
      alert("Qualcosa è andato storto!!!");
    window.location.reload();
  }

  create(product: Product) {
    this.productService.create(product).subscribe(

      val => {
        alert(`Prodotto inserito correttamente`);
      },

      error => {
        alert('OPS... Si è verificato un errore durante la scrittura');
      },

      () => { console.log('Creazione completata'); }
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
    if (confirm(`STAI PER AGGIORNARE IL PRODOTTO CON ID:${product.id} 
               SEI SICURO?`)) {
      this.productService
        .update(this.productForm.value, product.id).subscribe(
          val => {
            alert(`PIATTO ID:${product.id} AGGIORNATO`);
          },

          error => {
            alert(`OPS... Si è verificato un errore durante l'aggiornamento`);
            window.location.reload();
          },

          () => {
            console.log('aggiornamento completato');
            window.location.reload();
          }
        );
    }

  }

  resetForm() {
    this.productForm.reset();
  }

  backHome() {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
