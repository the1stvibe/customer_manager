import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatecustomerComponent } from '../pages/createcustomer/createcustomer.component';
import { ICustomer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) {}

   getCustomers() : Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(
      'https://jsonplaceholder.typicode.com/users'
      );
   }

createcustomer(customer: ICustomer) :Observable<ICustomer> {
  return this.httpClient.post<ICustomer>("https://jsonplaceholder.typicode.com/users",
  customer );
}
editcustomer(customer: ICustomer) : Observable<ICustomer> {
  return this.httpClient.put<ICustomer>(`https://jsonplaceholder.typicode.com/users/${customer.id}`, customer);
}

updatecustomer(customer: ICustomer) : Observable<ICustomer> {
  return this.httpClient.put<ICustomer>(`https://jsonplaceholder.typicode.com/users/${customer.id}`, customer);
}

deletecustomer(customer: ICustomer) : Observable<ICustomer> {
  return this.httpClient.delete<ICustomer>(`https://jsonplaceholder.typicode.com/users/${customer.id}`);
}

}