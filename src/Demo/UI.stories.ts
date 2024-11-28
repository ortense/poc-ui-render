import { render } from '@tiendanube/nube-ui/utils'
import { card } from './card'
import { cardList } from './card-list'
import { MyImage } from './responsive-image'

export default { title: 'Demo/UI' }

export const ExampleOne = render(MyImage())

export const ExampleTwo = render(card(
  'https://d4avy5zjiurvu.cloudfront.net/content/2024/05/facts-1.webp',
  'NuvemShop'
))

export const ExampleThree = render(cardList())
