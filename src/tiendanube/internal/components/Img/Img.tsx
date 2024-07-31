import { Size } from '../../internal/types'

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

export function Img(props: ImgProps) {
  const { src, alt, sources, width, height } = props
  if (sources) {
    return <picture>
      {sources?.map(({ src, media, width: w, height: h }) =>
        <source
          srcSet={src} media={media} width={w || width} height={h || height}
        />
      )}
      <img src={src} alt={alt} width={width} height={height} />
    </picture>
  }

  return <img src={props.src} alt={props.alt} width={width} height={height} />
}