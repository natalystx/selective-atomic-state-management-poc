import { createStateHook } from "./createStateHooks";

const states = new Map<string, () => [any, (val: any) => void]>();
const lastValues = new Map<string, any>();

export const useStore = () => {
  const useStateSelector = <T>(
    selector: string,
    val?: T
  ): [T, (val: T) => void] => {
    if (!states.has(selector)) {
      const useState = createStateHook(val, selector);
      states.set(selector, useState);
      return useState() as [T, (val: T) => void];
    }

    return states.get(selector)!() as [T, (val: T) => void];
  };

  return {
    useStateSelector,
  };
};
