import { FC, PropsWithChildren, ReactNode } from 'react';
export type ReactNodeOrFunc = ReactNode | (() => ReactNode);
export declare const NodeOrFuncRenderer: FC<PropsWithChildren<any>>;
export default NodeOrFuncRenderer;
