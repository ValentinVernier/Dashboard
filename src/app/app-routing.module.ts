import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "order" , component: OrderComponent },
  { path: "products" , component: ProductsComponent },
  { path: "dashboard" , component: DashboardComponent },
  { path: "not-found" , component: FourOhfourComponent },
  { path: "**" , redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
