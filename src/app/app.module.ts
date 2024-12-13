import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatecustomerComponent } from './pages/createcustomer/createcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreatecustomerComponent,
    EditCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
