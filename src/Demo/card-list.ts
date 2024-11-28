import { col, row, txt } from '@tiendanube/nube-ui'
import { card } from './card'
import { theme } from './theme'

const images = [
  'https://d4avy5zjiurvu.cloudfront.net/content/2024/04/hero-comp.webp',
  'https://d4avy5zjiurvu.cloudfront.net/content/2024/02/np-hero.webp',
  'https://du2meg4hr1wce.cloudfront.net/img/hero/hero-cvr-br.webp',
]

export const cardList = () => col({
  width: '100%',
  alignItems: 'center',
  
  gap: theme.spacing.default,
  children: [
    txt({ value: 'card list', level: 1, modifiers: ['bold', 'capitalize'] }),
    ...images.map(src => card(src, 'alt text'))
  ]
})
