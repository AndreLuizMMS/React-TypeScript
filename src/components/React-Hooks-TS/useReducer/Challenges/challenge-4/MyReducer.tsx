import { useState } from 'react';

export function myReducer(reducer: any, initialState: any) {
  const [stateCustom, setState] = useState(initialState);

  // ???
  function dispatchCustom(action: any) {
    setState((s: any) => reducer(s, action));
  }

  return [stateCustom, dispatchCustom];
}
