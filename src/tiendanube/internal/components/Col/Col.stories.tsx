// src/components/Box.stories.tsx
import { Meta } from '@storybook/react';
import { Col, ColProps } from './Col';
import { Box, BoxProps } from '../Box';

export default {
  title: 'Components/Col',
  component: Col,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    gap: { control: 'text' },
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

const props: ColProps = {
  children: [
    <Square background="lightcyan">1</Square>,
    <Square background="lightgreen">2</Square>,
    <Square background="mediumpurple">3</Square>,
  ],
  margin: 50,
  padding: 50,
  gap: 50,
  reverse: false,
  background: '#f0f0f0',
  color: '#0F0f0F',
  justifyContent: 'start',
  justifyItems: 'start',
  alignItems: 'start',
  alignContent: 'start',
};


export const Default = (args: ColProps) => <Col {...props} {...args} />