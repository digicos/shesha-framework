import { Type } from '@react-awesome-query-builder/antd';
export type CustomType = Type & {
    operators?: string[];
};
export declare const GuidType: CustomType;
export default GuidType;
