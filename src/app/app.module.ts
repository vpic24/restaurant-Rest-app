import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './service/product.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DishDetailsComponent,
    AddDishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
