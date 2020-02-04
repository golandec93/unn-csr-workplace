import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Customer} from '../model/customer.model';
import {Service} from '../model/service.model';
import {CustomerService} from '../customer.service';
import {ServicesService} from '../services.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {share, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private servicesService: ServicesService,
              private activatedRoute: ActivatedRoute) {
  }

  protected customer: Customer;
  protected services: Service[];

  private customer$: Observable<Customer>;
  private services$: Observable<Service[]>;

  ngOnInit() {
    this.customer$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap: ParamMap): Observable<Customer> => {
        const customerId = paramMap.get('customerId');
        return this.customerService.getCustomerById(parseInt(customerId, 10));
      }),
      share());
    this.customer$.subscribe(customer => this.customer = customer);
    this.services$ = this.customer$.pipe(
      switchMap(customer => this.servicesService.getServicesByCustomerId(customer.id)),
      share()
    );
    this.services$.subscribe(services => this.services = services);
  }
}
