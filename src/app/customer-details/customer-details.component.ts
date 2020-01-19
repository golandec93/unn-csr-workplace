import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer.model';
import {Service} from '../model/service.model';
import {CustomerService} from '../customer.service';
import {ServicesService} from '../services.service';
import {randomId} from '../stub-utils';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService: CustomerService, private servicesService: ServicesService) {
  }

  customer: Customer;
  services: Service[];

  ngOnInit() {
    this.customer = this.customerService.getCustomerById(randomId());
    this.services = this.servicesService.getServicesByCustomerId(this.customer.id);
  }

}
