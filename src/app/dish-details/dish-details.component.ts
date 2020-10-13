import { Component, Input, OnInit } from '@angular/core';
import { Product } from "src/app/models/product";

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  constructor() { }

  @Input() productDetails: Product;

  ngOnInit(): void {
  }

}
