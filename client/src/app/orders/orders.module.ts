import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrdersModule { }
