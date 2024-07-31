import { NubeSDKState } from '@tiendanube/nube-sdk-types';

export const defaultState: Readonly<NubeSDKState> = Object.freeze({
  store: {
    id: '1234',
    lang: 'pt-br',
    tags: ['demo'],
    ab_experiments: [],
  },
  cart: {
    id: '56789',
    items: [],
    subtotal: 0,
  },
  customer: {
    contact: {
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      identification_number: null,
    }
  },
  checkout: {
    status: 'READY',
    step: 'START',
    payment: null,
  },
  shipping: {
    address: null,
    contact: null,
  },
  billing: {
    address: null,
    contact: null,
  },
  ui: {}
})