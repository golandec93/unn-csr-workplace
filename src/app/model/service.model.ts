export class Service {
  id: number;
  name: string;
  customerId: number;

  static of(id: number, name: string, customerId: number): Service {
    const newInstance: Service = new Service();
    newInstance.id = id;
    newInstance.customerId = customerId;
    newInstance.name = name;
    return newInstance;
  }
}
