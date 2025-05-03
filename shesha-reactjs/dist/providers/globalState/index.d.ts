import { FC, PropsWithChildren } from 'react';
import { IGlobalState } from './contexts';
declare const GlobalStateProvider: FC<PropsWithChildren>;
declare function useGlobalState(): IGlobalState;
export default GlobalStateProvider;
export { GlobalStateProvider, useGlobalState };
