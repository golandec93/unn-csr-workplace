import {Injectable} from '@angular/core';
import {Equipment} from './model/equipment.model';
import {HttpClient} from '@angular/common/http';
import {DataAppResponse} from './model/data-app-response.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  constructor(private httpClient: HttpClient) {
  }

  public getEquipmentByServiceId(serviceId: number): Observable<Equipment[]> {
    return this.httpClient.get<DataAppResponse<Equipment>>(environment.backend + `/services/${serviceId}/hardwares`)
      .pipe(map(response => response.content));
  }

  public markAsBroken(hardwareId: number): Observable<any> {
    return this.httpClient.get<any>(environment.backend + '/hardwares/search/setHardwareStatusFailByHardware_Id',
      {params: {hardwareId: '' + hardwareId}});
  }
}
