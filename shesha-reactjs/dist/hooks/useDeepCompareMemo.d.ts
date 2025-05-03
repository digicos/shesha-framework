import { DependencyList } from 'react';
export declare function useDeepCompareMemo<T>(callback: () => T, dependencies: DependencyList): T;
/**
 * Variation of the `useDeepCompareMemo` that keeps reference if the result contains the same data. It allows to avoid unneeded re-rendering
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export declare function useDeepCompareMemoKeepReference<T>(callback: () => T, dependencies: DependencyList): T;
