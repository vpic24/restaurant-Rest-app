import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {

  constructor() { }

  @Input() productUpdate: Product;

  ngOnInit(): void {
  }

}
