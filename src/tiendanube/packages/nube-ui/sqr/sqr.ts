import { NubeComponent, Size } from '@internal/types'
import { BoxProps } from '../box'

type OmitedProps =
  | 'width'
  | 'height'
  | 'alignItems'
  | 'alignContent'
  | 'justifyItems'
  | 'justifyContent'

export type SqrProps = Omit<BoxProps, OmitedProps> & {
  size: Size
}

export const sqr = (props: SqrProps): NubeComponent => ({
   t: 'sqr',
   ...props
})
