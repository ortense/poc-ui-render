import { img,  } from '@tiendanube/nube-ui';

const img1 = 'https://d4avy5zjiurvu.cloudfront.net/content/2024/04/hero-comp.webp'
const img2 = 'https://d4avy5zjiurvu.cloudfront.net/content/2024/05/facts-1.webp'

export const MyImage = () => img({
  src: img1,
  alt: 'NuvemShop',
  sources:[
    {
      src: img2,
      media: '(max-width: 500px)',
    }
  ]
})
