import { Injectable } from '@angular/core';
import {Customer} from './model/customer.model';
import {randomId} from './stub-utils';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomerById(customerId: number): Customer {
    const customer = new Customer();
    customer.id = customerId;
    customer.name = 'Customer #' + customer.id;
    return customer;
  }

  getCustomerByPhoneNumber(phoneNumber: string): Customer {
    return this.getCustomerById(randomId());
  }

}
