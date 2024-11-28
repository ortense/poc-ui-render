import { defaultState, render, run } from '@tiendanube/nube-ui/utils'
import { col, row, txt } from '@tiendanube/nube-ui'
import { NubeSDK, NubeSDKState } from '@tiendanube/nube-sdk-types'
import { theme } from './theme'

export default { title: 'Demo/Events' }

const gift = () => row({
  padding: '1rem',
  justifyContent: 'center',
  width: '100%',
  background: theme.colors.primary.dark,
  color: theme.colors.primary.light,
  children: [ 
    txt({
      value: 'Você ganhou um brinde!', 
      modifiers: ['bold', 'uppercase']
    })
  ]
})

export const GiftComponent = render(gift())

function MySimpleApp (nube: NubeSDK) {
  nube.on('checkout:step_ready', (state: NubeSDKState) => {
    if (state.cart.subtotal >= 500) {
      nube.send('checkout:render_element', () => ({
        ui: {
          'before_line_items': gift()
        }
      }))
    }
  })
}

export const ExampleOne = run(MySimpleApp, {
  ...defaultState,
  cart: {
    id: '123',
    items: [{
      name: 'my test product',
      sku: '0001',
      quantity: 1,
      price: 100,
    }],
    subtotal: 500
  }
})
