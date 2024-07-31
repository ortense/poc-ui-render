import { NubeComponent, TxtModifier } from '@internal/types';

export type TxtProps = {
  color?: string;
  background?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'inline';
  modifiers?: TxtModifier[];
  value: string;
};

export const txt = ({ value, ...props }: TxtProps): NubeComponent => ({
  t: 'txt',
  children: value,
  ...props 
})
