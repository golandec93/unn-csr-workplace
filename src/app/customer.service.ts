import {Injectable} from '@angular/core';
import {Customer} from './model/customer.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  public getCustomerById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(environment.backend + `/customers/${customerId}`);
  }

  public getCustomerByPhoneNumber(phoneNumber: string): Observable<Customer> {
    return this.httpClient.get<Customer>(environment.backend + '/customers/search/getCustomerByPhoneNumber', {params: {phoneNumber}});
  }

}
