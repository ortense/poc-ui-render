import { defaultState, render, run } from '@tiendanube/nube-ui/utils'
import { row, txt } from '@tiendanube/nube-ui'
import { theme } from './theme'
import { NubeApp } from '@internal/types'
import { NubeSDK } from '@tiendanube/nube-sdk-types'


export default { title: 'Demo/Events' }

const gift = () => row({
  padding: '1rem',
  justifyContent: 'center',
  width: '100%',
  background: theme.colors.primary.dark,
  color: theme.colors.primary.light,
  children: [
    txt({
      value: 'you got a gift!', 
      modifiers: ['bold', 'uppercase']
    })
  ]
})

export const GiftComponent = render(gift())

const MySimpleApp: NubeApp = (nube) => {
  nube.on('checkout:step_ready', ({ cart }) => {
    if (cart.subtotal >= 200) {
      nube.send('checkout:render_element', () => {
        return {
          ui: {
            'last_at_main_content': gift()
          }
        }
      })
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
    subtotal: 200
  }
})
