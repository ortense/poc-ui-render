import { Box, BoxProps } from '../Box'
import { Size } from '../../internal/types'

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

export function Sqr(props: SqrProps) {
  const { size, ...boxProps } = props
  return <Box
    {...boxProps}
    width={size}
    height={size}
    alignItems='center'
    justifyContent='center'
  />
}