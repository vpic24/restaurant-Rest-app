import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ristorante';
  tag = [
    { title: 'Lista Prodotti', url: "" },
    //{title: '+ Aggiungi Prodotto' , url: ""}
  ];
}
