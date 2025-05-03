import { IModelMetadata } from "../../interfaces";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { CSSProperties, FC } from "react";
export interface PropertySelectorSingleProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    multiple?: false;
}
export interface PropertySelectorMultipleProps {
    value?: string[][];
    onChange?: (value: string[]) => void;
    multiple?: true;
}
type UnionProps = PropertySelectorSingleProps | PropertySelectorMultipleProps;
export type IPropertyCascaderProps = UnionProps & {
    multiple?: boolean;
    meta: IModelMetadata;
    size?: SizeType;
    readOnly?: boolean;
    style?: CSSProperties;
};
export declare const PropertyCascader: React.FC<IPropertyCascaderProps>;
export interface IPropertyCascaderDotNotationProps extends Omit<IPropertyCascaderProps, "value" | "onChange" | "meta"> {
    value?: string;
    onChange: (newValue: string) => void;
}
export declare const PropertyCascaderDotNotation: FC<IPropertyCascaderDotNotationProps>;
export {};
