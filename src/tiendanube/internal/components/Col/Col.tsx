import { Box, BoxProps } from '../Box'

export type ColProps = Omit<BoxProps, 'direction'>

export function Col(props: ColProps) {
  return <Box direction="col" {...props} />
}