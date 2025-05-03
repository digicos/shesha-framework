import { FC } from 'react';
import { SpinnerStyles } from './utils';
export interface IOverlayLoaderProps {
    loadingText?: string;
    color?: string;
    loading?: boolean;
    style?: SpinnerStyles;
}
export declare const OverlayLoader: FC<IOverlayLoaderProps>;
export default OverlayLoader;
