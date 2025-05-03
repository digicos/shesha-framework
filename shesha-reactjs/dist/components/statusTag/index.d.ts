import { CSSProperties, FC } from 'react';
export interface IStatusMap {
    code?: number;
    text?: string;
    color?: string;
    override?: string;
}
export interface IStatusMappings {
    mapping?: IStatusMap[];
    default?: IStatusMap;
}
export declare const DEFAULT_STATUS_TAG_MAPPINGS: IStatusMappings;
export interface IStatusTagProps {
    override?: string;
    value: number | string;
    color: string;
    mappings?: IStatusMappings;
    style?: CSSProperties;
}
export declare const StatusTag: FC<IStatusTagProps>;
export default StatusTag;
