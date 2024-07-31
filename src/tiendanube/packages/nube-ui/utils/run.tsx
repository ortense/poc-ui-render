import { createSDK } from '@internal/sdk/create'
import { NubeApp } from '@internal/types'
import { Wireframe } from '@internal/components/Wireframe'
import { defaultState } from './state'

export const run = (app: NubeApp, initialState = defaultState) =>
  () => {
    window.nubeSDK = createSDK(initialState)
    app(window.nubeSDK)
    return <Wireframe.Checkout />
  }