import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderComponent } from './order/order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalCartsComponent } from './total-carts/total-carts.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OrderComponent,
    HomePageComponent,
    ProductsComponent,
    DashboardComponent,
    CardsComponent,
    FourOhfourComponent,
    TotalSalesComponent,
    TotalOrdersComponent,
    TotalCartsComponent,
    TotalUsersComponent,
    UserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
