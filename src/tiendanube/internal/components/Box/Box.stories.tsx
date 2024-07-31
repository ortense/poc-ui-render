// src/components/Box.stories.tsx
import { Meta } from '@storybook/react';
import { Box, BoxProps } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    gap: { control: 'text' },
    direction: {
      control: 'radio',
      options: ['row', 'col'],
    },
    reverse: { control: 'boolean' },
    bg: { control: 'color' },
    fg: { control: 'color' },
    justifyContent: {
      control: 'radio',
      options: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    justifyItems: {
      control: 'radio',
      options: ['start', 'center', 'end', 'stretch'],
    },
    alignItems: {
      control: 'radio',
      options: ['start', 'center', 'end', 'stretch'],
    },
    alignContent: {
      control: 'radio',
      options: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
  },
} as Meta;

const Square = (props: BoxProps) => (
  <Box
    {...props}
    width="50px"
    height="50px"
    alignItems='center'
    justifyContent='center'
  />
)

const props: BoxProps = {
  children: [
    <Square background="lightcyan">1</Square>,
    <Square background="lightgreen">2</Square>,
    <Square background="mediumpurple">3</Square>
  ],
  margin: 50,
  padding: 50,
  gap: 50,
  direction: 'row',
  reverse: false,
  background: '#f0f0f0',
  color: '#0F0f0F',
  justifyContent: 'start',
  justifyItems: 'start',
  alignItems: 'start',
  alignContent: 'start',
};


export const Default = (args: BoxProps) => <Box {...props} {...args} />