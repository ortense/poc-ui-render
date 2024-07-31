import { Box, BoxProps } from '../Box'

export type RowProps = Omit<BoxProps, 'direction'>

export function Row(props: RowProps) {
  return <Box direction="row" {...props} />
}