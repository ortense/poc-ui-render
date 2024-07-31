import { CSSProperties, ReactNode } from 'react'
import { Size } from '@internal/types'

export type BtnProps = {
  children?: ReactNode,
  width?: Size,
  height?: Size,
  margin?: Size
  padding?: Size
  background?: string
  color?: string
  borderRadius?: Size
}

const defaultOptions: BtnProps = {
  width: 0,
  height: 'auto',
  margin: 0,
  padding: '1rem',
}

function toStyle(props: BtnProps) {
  const style: CSSProperties = {}

  const opts = Object.assign({}, defaultOptions, props)

  style.width = opts.width
  style.height = opts.height
  style.margin = opts.margin
  style.padding = opts.padding
  style.border = 'none'
  style.backgroundColor = opts.background
  style.color = opts.color
  style.borderRadius = opts.borderRadius

  return style
}

export function Btn(props: BtnProps) {
  const { children, ...options } = props
  return <button style={toStyle(options)} onClick={e => e.preventDefault()}>
    {children}
  </button>
}
