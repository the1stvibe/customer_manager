import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { CreatecustomerComponent } from './pages/createcustomer/createcustomer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'createcustomer',
    component: CreatecustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
