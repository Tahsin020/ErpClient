import { CustomerModel } from './customer.model';
import { OrderDetailModel } from './order-detail.model';

export class OrderModel {
  id: string = '';
  orderNumber: string = '';
  orderNumberYear: string = '';
  number: string = '';
  date: string = '';
  deliveryDate: string = '';
  customerId: string = '';
  status: OrderStatusEnum = new OrderStatusEnum();
  customer: CustomerModel = new CustomerModel();
  details: OrderDetailModel[] = [];
}

export class OrderStatusEnum {
  value: number = 1;
  name: string = '';
}
