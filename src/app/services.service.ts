import {Service} from './model/service.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataAppResponse} from './model/data-app-response.model';
import {environment} from '../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }

  public getServicesByCustomerId(customerId: number): Observable<Service[]> {
    return this.httpClient.get<DataAppResponse<Service>>(environment.backend + `/customers/${customerId}/services`)
      .pipe(map(response => response.content));
  }

  public getServiceById(serviceId: number): Observable<Service> {
    return this.httpClient.get<Service>(environment.backend + `/services/${serviceId}`);
  }
}
