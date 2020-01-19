import { Injectable } from '@angular/core';
import {randomId, range} from './stub-utils';
import {Equipment} from './model/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor() { }

  getEquipmentByServiceId(serviceId: number): Equipment[] {
    return Array.from(range(0, 4))
      .map(_ => randomId())
      .map(id => Equipment.of(id, 'Hardware #' + id, serviceId));
  }
}
