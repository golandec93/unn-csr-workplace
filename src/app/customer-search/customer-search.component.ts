import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Customer} from '../model/customer.model';
import {CustomerService} from '../customer.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerSearchComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customer: Customer;

  ngOnInit() {
  }

  search(phoneNumber: string) {
    const unmaskedPhoneNumber = phoneNumber.replace(/[()\-\s]/g, '');
    console.log('unmasked: ' + unmaskedPhoneNumber);
    this.customerService.getCustomerByPhoneNumber(unmaskedPhoneNumber)
      .pipe(tap(_ => console.log(_)))
      .subscribe(customer => this.customer = customer);
  }
}
