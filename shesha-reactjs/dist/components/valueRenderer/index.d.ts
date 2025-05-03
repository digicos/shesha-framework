import { IPropertyMetadata } from "../../interfaces/metadata";
import { FC } from "react";
export interface ValueRendererProps {
    value: any;
    meta: IPropertyMetadata;
}
export declare const ValueRenderer: FC<ValueRendererProps>;
