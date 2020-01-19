import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer.model';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customer: Customer;

  ngOnInit() {
  }
  search(phoneNumber: string) {
    this.customer = this.customerService.getCustomerByPhoneNumber(phoneNumber);
  }

}
