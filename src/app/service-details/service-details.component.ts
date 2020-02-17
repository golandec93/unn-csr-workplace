import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ServicesService} from '../services.service';
import {Service} from '../model/service.model';
import {Equipment} from '../model/equipment.model';
import {EquipmentService} from '../equipment.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {share, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private equipmentService: EquipmentService,
              private servicesService: ServicesService,
              private activatedRoute: ActivatedRoute) {
  }

  protected equipment: Equipment[];
  protected service: Service;

  private service$: Observable<Service>;
  private equipment$: Observable<Equipment[]>;

  ngOnInit() {
    this.service$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Service> => {
        const serviceId = params.get('serviceId');
        return this.servicesService.getServiceById(parseInt(serviceId, 10));
      }),
      share());
    this.service$.subscribe(service => this.service = service);
    this.equipment$ = this.service$.pipe(
      switchMap(service => this.equipmentService.getEquipmentByServiceId(service.id)),
      tap(console.log),
      share());
    this.equipment$.subscribe(equipment => this.equipment = equipment);
  }

  public markServiceAsBroken() {
    const hardwareId = this.equipment[Math.floor(Math.random() * this.equipment.length)].id;
    this.equipmentService.markAsBroken(hardwareId).subscribe(
      _ => {
        this.service$ = this.servicesService.getServiceById(this.service.id).pipe(share());
        this.service$.subscribe(service => this.service);
        this.equipment$ = this.service$.pipe(
          switchMap(service => this.equipmentService.getEquipmentByServiceId(service.id)),
          tap(console.log),
          share());
        this.equipment$.subscribe(equipment => this.equipment = equipment);
      }
    );
  }
}
