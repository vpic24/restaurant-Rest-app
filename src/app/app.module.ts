import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './service/product.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { DishDetailsComponent } from 'src/app/components/dish-details/dish-details.component';
import { AddDishComponent } from 'src/app/components/add-dish/add-dish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DishDetailsComponent,
    AddDishComponent,
    SpinnerComponent
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
