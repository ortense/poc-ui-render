import { BoxProps } from './Box';

const defaultOptions = {
  width: 0,
  height: 'auto',
  margin: 0,
  padding: 'auto',
  gap: 0,
  direction: 'row',
  reverse: false,
  justifyContent: 'start',
  justifyItems: 'start',
  alignContent: 'start',
  alignItems: 'start',
} as const

const alignContentOptions = {
  start: 'flex-start',
  center: 'center',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly'
} as const

const directionOptions = {
  row: 'row',
  col: 'column'
} as const

export function toStyle(props: BoxProps) {
  const {
    width, height,
    background, color, borderRadius,
    margin, padding, gap, direction, reverse, justifyContent, justifyItems, alignItems, alignContent,
  } = Object.assign({}, defaultOptions, props);

  const style: React.CSSProperties = {};

  style.display = 'flex'
  style.width = width
  style.height = height
  style.margin = typeof margin === 'number' ? `${margin}px` : margin;
  style.padding = typeof padding === 'number' ? `${padding}px` : padding;
  style.gap = typeof gap === 'number' ? `${gap}px` : gap;
  style.backgroundColor = background;
  style.color = color;
  style.borderRadius = borderRadius,
    style.alignContent = alignContentOptions[alignContent as keyof typeof alignContentOptions];
  style.justifyContent = justifyItems
  style.flexDirection = directionOptions[direction]

  if (reverse) {
    style.flexDirection += '-reverse';
  }

  style.justifyContent = justifyContent;

  style.alignItems = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch'
  }[alignItems];

  return style;
}
