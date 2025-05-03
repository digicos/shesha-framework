export declare function useWebStorage<T>(storage: 'localStorage' | 'sessionStorage', key: string, initialValue: T, ignoredKeys?: string[]): [T, (v: T) => void];
