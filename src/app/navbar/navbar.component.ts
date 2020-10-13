import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ["items"]
})
export class NavbarComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
