import {Injectable} from '@angular/core';
import {Service} from './model/service.model';
import {randomId, range} from './stub-utils';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {
  }

  public getServicesByCustomerId(customerId: number): Service[] {
    return Array.from(range(0, 9))
      .map(_ => randomId())
      .map(id => Service.of(id, 'Service #' + id, customerId));
  }

  public getServiceById(serviceId: number): Service {
    return Service.of(serviceId, 'Service #' + serviceId, randomId());
  }
}
