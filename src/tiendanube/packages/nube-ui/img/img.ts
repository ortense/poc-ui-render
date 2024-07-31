import { NubeComponent, Size } from '@internal/types'

export type ImageSource = {
  src: string
  media?: string
  width?: Size
  height?: Size
}

export type ImgProps = {
  src: string
  alt: string
  sources?: ImageSource[]
  width?: Size
  height?: Size
}

export const img = (props: ImgProps): NubeComponent => ({
  t: 'img',
  ...props
})
