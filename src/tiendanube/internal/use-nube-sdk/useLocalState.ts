import { useEffect, useState } from 'react';
import { NubeSDKState, NubeSDKEvent } from '@tiendanube/nube-sdk-types';

export function useLocalState(listen?: NubeSDKEvent | NubeSDKEvent[]) {
  const [state, setState] = useState<NubeSDKState>(() => window.nubeSDK.getState());

  useEffect(() => {
    if (listen) {
      Array.isArray(listen)
        ? listen.forEach(evt => window.nubeSDK.on(evt, setState))
        : window.nubeSDK.on(listen, setState);
    }

    return () => {
      if (listen) {
        Array.isArray(listen)
          ? listen.forEach(evt => window.nubeSDK.off(evt, setState))
          : window.nubeSDK.off(listen, setState);
      }
    };
  }, [listen]);

  return state;
}
