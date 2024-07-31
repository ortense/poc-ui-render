import { Meta } from '@storybook/react';
import { Btn, BtnProps } from './Btn';

export default {
  title: 'Components/Btn',
  component: Btn,
  argTypes: {
    bg: { control: 'color' },
    fg: { control: 'color' },
  }
} as Meta;

export const Default = (args: BtnProps) => <Btn {...args}>click me!</Btn>