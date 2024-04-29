import { CustomerModel } from "./customer.model";
import { InvoiceDetailModel } from "./invoice-detail.model";

export class InvoiceModel{
    id: string ="";
    invoiceNumber: string = '';
    date: string = '';
    customerId: string = '';
    type: InvoiceTypeEnum = new InvoiceTypeEnum();
    typeValue : number = 1;
    customer: CustomerModel = new CustomerModel();
    details: InvoiceDetailModel[] = [];
    orderId?: string | null = null;
}
  
export class InvoiceTypeEnum {
    value: number = 1;
    name: string = '';
}
  