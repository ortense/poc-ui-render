// src/components/Box.stories.tsx
import { Meta } from '@storybook/react';
import { Sqr, SqrProps } from './Sqr';

export default {
  title: 'Components/Sqr',
  component: Sqr,
  argTypes: {
    size: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    gap: { control: 'text' },
    reverse: { control: 'boolean' },
    bg: { control: 'color' },
    fg: { control: 'color' },
  },
} as Meta;

const props: SqrProps = {
  children: "square",
  size: 120,
  reverse: false,
  background: '#f0f0f0',
  color: '#0F0f0F',
};


export const Default = (args: SqrProps) => <Sqr {...props} {...args} />