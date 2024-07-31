import type { Billing, Cart, Checkout, Customer, Shipping, Store, UI } from './domain';
import type { DeepPartial } from './utility';

export type NubeSDKState = {
  store: Store;
  cart: Cart;
  customer: Customer;
  checkout: Checkout;
  shipping: Shipping;
  billing: Billing;
  ui: UI;
};

export type NubeSDKEvent =
  | '*'
  | 'customer:email_added'
  | 'customer:phone_added'
  | 'customer:identification_added'
  | 'checkout:step_ready'
  | 'checkout:step_submitted'
  | 'checkout:payment_option_selected'
  | 'checkout:payment_status_changed'
  | 'checkout:order_placed'
  | 'checkout:order_paid'
  | 'checkout:render_element'
  | `custom:${string}:${string}`

export type NubeSDKListener = (data: Readonly<NubeSDKState>, event: NubeSDKEvent) => void;
export type NubeSDKStateModifier = (data: Readonly<NubeSDKState>) => DeepPartial<NubeSDKState>;

export type NubeSDK = {
  on(event: NubeSDKEvent, listener: NubeSDKListener): void;
  off(event: NubeSDKEvent, listener: NubeSDKListener): void;
  send(event: NubeSDKEvent, modifier?: NubeSDKStateModifier): void;
  getState(): Readonly<NubeSDKState>;
};

export type NubeSDKWithQueue = NubeSDK & {
  queue?: [keyof NubeSDK, ...args: unknown[]];
};

declare global {
  export interface Window {
    nubeSDK: NubeSDKWithQueue;
  }
}

export type NubeApp = (nube: NubeSDK) => void
