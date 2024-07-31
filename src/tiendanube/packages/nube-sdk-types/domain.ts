import { NubeComponent } from '@internal/types';
import { DeepNullable, Nullable, Prettify } from './utility';

export type Store = {
  id: string;
  lang: string;
  tags: string[];
  ab_experiments: string[];
}

export type Product = {
  sku: string
  name: string
  quantity: number
  price: number
}

export type Cart = {
  id: string;
  items: Product[]
  subtotal: number
}

export type Address = Prettify<DeepNullable<{
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  state: string;
  zipcode: string;
  city: string;
  country: string;
  reference: string;
  between_streets: string;
}>>

export type IdentificationNumberType = 'CPF' | 'CNPJ' | 'DNI' | 'OTHER';
export type IdentificationNumber = {
  value: string;
  type: IdentificationNumberType;
}

export type Contact = Prettify<DeepNullable<{
  first_name: string;
  last_name: string;

  email: string;
  phone: string;
}> & { identification_number: Nullable<IdentificationNumber> }>

export type Customer = {
  contact: Contact;
}

export type Shipping = {
  address: Nullable<Address>;
  contact: Nullable<Contact>;
}

export type Billing = {
  address: Nullable<Address>;
  contact: Nullable<Contact>;
}

export type CheckoutStatus = 'READY' | 'LOADING'
export type CheckoutStep = 'START' | 'NEXT' | 'SUCCESS'
export type PaymentOptionType = 'REDIRECT' | 'TRANSPARENT'
export type PaymentStatus = 'PENDING' | 'PAID' | 'cancelled';

export type PaymentOption = {
  name: string
  type: PaymentOptionType
}

export type Payment = {
  status: PaymentStatus;
  payment_option: PaymentOption
  cancellation_reason: Nullable<string>
}

export type Checkout = {
  status: CheckoutStatus;
  step: CheckoutStep;
  payment: Nullable<Payment>;
}

export type Slot =
 | 'before_main_content'
 | 'fist_at_main_content'
 | 'last_at_main_content'
 | 'before_line_items'
 | 'afer_line_items'
 | 'after_main_content' 


export type UI = Partial<Record<Slot, NubeComponent>>