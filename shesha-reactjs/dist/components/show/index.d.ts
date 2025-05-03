import { FC, PropsWithChildren, ReactNode } from 'react';
export interface IShowProps {
    when: boolean;
    loadingComponent?: ReactNode;
}
/**
 * Use <Show> for conditional logic. It takes a singular when prop for a condition to match for. When the condition is truthy, the children will render, otherwise they will not
 */
export declare const Show: FC<PropsWithChildren<IShowProps>>;
export default Show;
