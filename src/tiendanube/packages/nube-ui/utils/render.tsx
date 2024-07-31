import { DynamicRender } from '@internal/components/DynamicRender';
import { NubeComponent } from '@internal/types';

export const render = (component: NubeComponent) =>
  () => <DynamicRender component={component} />

