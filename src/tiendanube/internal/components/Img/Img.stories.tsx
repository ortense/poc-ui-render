// src/components/Box.stories.tsx
import { Meta } from '@storybook/react';
import { Img, ImgProps, } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const props: ImgProps = {
  src: 'https://d4avy5zjiurvu.cloudfront.net/content/2024/04/hero-comp.webp',
  alt: 'Nuvemshop',
  width: 500
};

export const Default = () => <Img {...props} />
export const MultiSource = () => <Img
  {...props}
  sources={[
    {
      src: 'https://d4avy5zjiurvu.cloudfront.net/content/2024/05/facts-1.webp',
      media: '(max-width: 500px)'
    },
  ]}
/>