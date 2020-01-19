export class Equipment {
  id: number;
  name: string;
  serviceId: number;

  static of(id: number, name: string, serviceId: number) {
    const instance: Equipment = new Equipment();
    instance.id = id;
    instance.name = name;
    instance.serviceId = serviceId;
    return instance;
  }
}
