import {Status} from './status.model';
import {Equipment} from './equipment.model';
import {Customer} from './customer.model';

export interface Service {
  id: number;
  name: string;
  serviceStatus: Status;
  hardwares: Equipment[];
  customer: Customer;
}
