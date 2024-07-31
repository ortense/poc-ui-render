import { NubeSDKState, NubeSDKListener, NubeSDK } from '@tiendanube/nube-sdk-types';
import { DeepPartial } from '@tiendanube/nube-sdk-types/utility';

/**
 * Creates a SDK instance with a specific initial state.
 * @function createSDK
 * @param {NubeCheckoutSDKState} initialState - The initial state for the SDK.
 * @returns {NubeCheckoutSDK} A NubeCheckoutSDK instance with the specified data type and event names.
 * @example
 * ```
 * const sdk = createSDK(initialState)
 * ```
 */

export function createSDK(initialState: NubeSDKState): NubeSDK {
  const handlers = new Map<string, NubeSDKListener[]>();
  let state = structuredClone(initialState);

  return {
    on: (event, listener) => {
      const listeners = handlers.get(event) || [];
      handlers.set(event, [...listeners, listener]);
    },

    off: (event, listener) => {
      const listeners = handlers.get(event);
      if (listeners === undefined) {
        return;
      }

      handlers.set(
        event,
        listeners.filter((fn) => fn !== listener),
      );
    },

    send: (event, modifier) => {
      if (modifier) {
        state = deepMerge(state, modifier(state));
      }

      handlers.get(event)?.forEach((fn) => fn(state, event));
      handlers.get('*')?.forEach((fn) => fn(state, event));
    },

    getState() { return structuredClone(state); }
  };
}

export function deepMerge<T extends Object>(current: T, modifier: DeepPartial<T>): T {
  return Object
    .keys(modifier)
    .reduce<T>((actual, key) => {
      const property = actual[key as keyof T];
      const modifierProperty = modifier[key as keyof T];
      const isNested = property !== null
        && typeof property === 'object'
        && typeof modifierProperty === 'object'
        && !Array.isArray(property);

      return Object.assign(
        actual, {
        [key]: isNested
          ? deepMerge(property, modifierProperty as DeepPartial<typeof property>)
          : modifierProperty as T[keyof T]
      });
    }, structuredClone(current));
}
