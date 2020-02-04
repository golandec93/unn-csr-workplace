import {Status} from './status.model';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  customerStatus: Status;
}
