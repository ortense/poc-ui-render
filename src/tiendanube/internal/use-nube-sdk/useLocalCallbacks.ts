import { NubeSDKEvent, NubeSDKListener, NubeSDKStateModifier } from '@tiendanube/nube-sdk-types';
import { useCallback } from 'react';

export function useLocalCallbacks() {
  const send = useCallback((event: NubeSDKEvent, modifier?: NubeSDKStateModifier) => {
    window.nubeSDK.send(event, modifier as NubeSDKStateModifier);
  }, []);

  const on = useCallback((event: NubeSDKEvent, listener: NubeSDKListener) => {
    window.nubeSDK.on(event, listener);
  }, []);

  const off = useCallback((event: NubeSDKEvent, listener: NubeSDKListener) => {
    window.nubeSDK.off(event, listener);
  }, []);

  return { send, on, off };
}
