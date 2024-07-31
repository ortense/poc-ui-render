import { NubeComponent } from '@internal/types';
import { BoxProps } from '../box/box';

export type ColProps = Omit<BoxProps, 'direction'>

export const col = (props: ColProps): NubeComponent => ({
  t: 'col',
  ...props,
})
