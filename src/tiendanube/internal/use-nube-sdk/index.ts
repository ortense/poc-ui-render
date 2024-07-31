import { NubeSDKEvent } from '@tiendanube/nube-sdk-types'
import { useLocalState } from './useLocalState'
import { useLocalCallbacks } from './useLocalCallbacks'

export function useNubeSDK(listen?: NubeSDKEvent | NubeSDKEvent[]) {
  if (!('nubeSDK' in window)) {
    throw new ReferenceError('NubeSDK not found in window.nubeSDK')
  }

  const state = useLocalState(listen);
  const { send, on, off } = useLocalCallbacks();

  return { state, send, on, off };
}
