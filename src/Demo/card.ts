import { btn, col, img, txt } from '@tiendanube/nube-ui'
import { theme } from './theme'

export const card = (src: string, alt: string, c2a = 'hey!!') => {
  return col({
    background: theme.colors.primary.light,
    padding: theme.spacing.default,
    gap: theme.spacing.default,
    borderRadius: theme.spacing.default,
    width: '400px',
    height: '460px',
    justifyContent: 'space-between',
    children: [
      img({ src, alt }),
      btn({
        width: '100%',
        background: theme.colors.primary.dark,
        color: '#fff',
        borderRadius: theme.spacing.default,
        events: {
          'click': 'custom:app:click'
        },
        children: [
          txt({ value: c2a, modifiers: ['bold', 'uppercase'] })
        ],
      })
    ],
  })
}
