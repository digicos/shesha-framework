import { FC, PropsWithChildren } from 'react';
export interface IShaSpin {
    spinning?: boolean;
    spinIconSize?: number;
    tip?: string;
}
export declare const ShaSpin: FC<PropsWithChildren<IShaSpin>>;
export default ShaSpin;
