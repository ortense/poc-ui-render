import { Meta } from '@storybook/react';
import { Txt, TxtProps } from './Txt';

export default {
  title: 'Components/Txt',
  component: Txt,
  argTypes: {
    children: { control: 'text' },
    fg: { control: 'color' },
    bg: { control: 'color' },
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5, 6, 'inline'],
    },
    modifiers: {
      control: 'check',
      options: ['bold', 'italic', 'underline', 'strike', 'lowercase', 'uppercase', 'capitalize'],
    },
  },
} as Meta;

const initialProps: TxtProps = { children: 'A simple text' }

export const Default = (props: TxtProps) => <Txt {...initialProps} {...props} />