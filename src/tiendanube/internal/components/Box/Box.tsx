import { ReactNode } from 'react'
import { toStyle } from './toStyle'
import { FlexContent, FlexItems, Size } from '@internal/types'

export type BoxProps = {
  children?: ReactNode,
  width?: Size,
  height?: Size,
  margin?: Size
  padding?: Size
  gap?: Size
  direction?: 'row' | 'col'
  reverse?: boolean,
  background?: string,
  color?: string,
  justifyContent?: FlexContent,
  justifyItems?: FlexItems,
  alignItems?: FlexItems,
  alignContent?: FlexContent,
  borderRadius?: Size
}

export function Box(props: BoxProps) {
  const { children, ...options } = props

  return (
    <div style={toStyle(options)}>
      {children}
    </div>
  )
}