import { IFlagsSetters } from '../../interfaces';
export declare function getFlagSetters<A extends string, B extends string, C extends string, D extends string>(dispatch: (action: any) => void): IFlagsSetters<A, B, C, D>;
