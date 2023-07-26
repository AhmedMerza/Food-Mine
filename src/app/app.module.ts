import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FoodComponent } from './food/food.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
{ path: '', component: MainComponent },
{ path: 'cart', component: CartComponent },
{ path: 'food/:id', component: FoodComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    MainComponent,
    FoodComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
