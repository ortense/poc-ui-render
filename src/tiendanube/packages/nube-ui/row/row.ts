import { NubeComponent } from '@internal/types';
import { BoxProps } from '../box/box';

export type RowProps = Omit<BoxProps, 'direction'>

export const row = (props: RowProps): NubeComponent => ({
  t: 'row',
  ...props,
})
