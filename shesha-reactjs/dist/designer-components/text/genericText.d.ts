import { CSSProperties, FC, PropsWithChildren } from 'react';
import { ITextTypographyProps } from './models';
interface IGenericTextProps extends Omit<ITextTypographyProps, 'style' | 'contentDisplay' | 'name' | 'id' | 'type' | 'content' | 'value'> {
    style?: CSSProperties;
}
export declare const GenericText: FC<PropsWithChildren<IGenericTextProps>>;
export {};
