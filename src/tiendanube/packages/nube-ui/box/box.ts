import { FlexContent, FlexItems, NubeComponent, Size } from '@internal/types';

export type BoxProps = {
  children?: NubeComponent[],
  width?: Size,
  height?: Size,
  margin?: Size,
  padding?: Size,
  gap?: Size,
  direction?: 'row' | 'col',
  reverse?: boolean,
  background?: string,
  color?: string,
  justifyContent?: FlexContent,
  justifyItems?: FlexItems,
  alignItems?: FlexItems,
  alignContent?: FlexContent,
  borderRadius?: Size
}

export const box = (props: BoxProps): NubeComponent => ({
  t: 'box',
  ...props,
})
