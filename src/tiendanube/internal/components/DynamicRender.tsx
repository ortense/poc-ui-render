import { NubeComponent } from '@internal/types';
import { UI } from './ui';

export function DynamicRender({ component }: { component?: NubeComponent }) {
  if (!component) return null

  const { t, children, ...props } = component;
  const Component = UI[t as keyof typeof UI];

  if (!Component) {
    console.error(`Component type "${t}" is not supported.`);
    return null;
  }

  let renderedChildren: string | JSX.Element | JSX.Element[] | null = null

  if (children) {
    if (Array.isArray(children)) {
      renderedChildren = children?.map((child, index) => (
        <DynamicRender key={index} component={child} />
      ))
    }

    const child = children as NubeComponent
    if (typeof child === 'object' && typeof child?.t === 'string') {
      renderedChildren = <DynamicRender component={child} />
    }
  }

  // @ts-expect-error dynamic children
  return <Component {...props}>{renderedChildren || children}</Component>;
}
