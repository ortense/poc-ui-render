import { NubeComponent, Size } from '@internal/types';

export type BtnProps = {
  children?: NubeComponent[],
  width?: Size,
  height?: Size,
  margin?: Size,
  padding?: Size,
  background?: string,
  color?: string,
  borderRadius?: Size,
  events: Record<string, string>
}

export function btn(props: BtnProps): NubeComponent {
  const { children, events, ...options } = props;
  console.log(events)
  return {
    t: 'btn',
    ...options,
    children: children || []
  };
}
