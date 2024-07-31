import { TxtModifier } from "@internal/types";

export type TxtProps = {
  color?: string;
  background?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'inline';
  modifiers?: TxtModifier[]
  children: string;
};

export function Txt(props: TxtProps) {
  const { color, background, level, modifiers = [], children } = props

  const style: React.CSSProperties = {
    color,
    backgroundColor: background,
    fontWeight: modifiers.includes('bold') ? 'bold' : undefined,
    fontStyle: modifiers.includes('italic') ? 'italic' : undefined,
    textDecoration: modifiers.includes('underline') && modifiers.includes('strike') ? 'underline line-through' :
      modifiers.includes('underline') ? 'underline' :
        modifiers.includes('strike') ? 'line-through' : undefined,
    textTransform: modifiers.includes('uppercase') ? 'uppercase' :
      modifiers.includes('lowercase') ? 'lowercase' :
        modifiers.includes('capitalize') ? 'capitalize' : undefined,
  };

  switch (level) {
    case 1:
      return <h1 style={style}>{children}</h1>;
    case 2:
      return <h2 style={style}>{children}</h2>;
    case 3:
      return <h3 style={style}>{children}</h3>;
    case 4:
      return <h4 style={style}>{children}</h4>;
    case 5:
      return <h5 style={style}>{children}</h5>;
    case 6:
      return <h6 style={style}>{children}</h6>;
    case 'inline':
      return <span style={style}>{children}</span>;
    default:
      return <p style={style}>{children}</p>;
  }
}
