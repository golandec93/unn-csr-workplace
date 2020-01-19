import {Component, OnInit} from '@angular/core';
import {ServicesService} from '../services.service';
import {Service} from '../model/service.model';
import {randomId} from '../stub-utils';
import {Equipment} from '../model/equipment.model';
import {EquipmentService} from '../equipment.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private equipmentService: EquipmentService, private servicesService: ServicesService) {
  }

  equipment: Equipment[];
  service: Service;

  ngOnInit() {
    this.service = this.servicesService.getServiceById(randomId());
    this.equipment = this.equipmentService.getEquipmentByServiceId(this.service.id);
  }

}
