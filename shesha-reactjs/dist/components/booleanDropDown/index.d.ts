import { SelectProps } from 'antd/lib/select';
import { FC } from 'react';
interface IBooleanDropDownProps extends SelectProps<any> {
    readonly objectItem: any;
    readonly setObjectItem: (objectItem: any) => void;
    readonly itemKey: string;
}
export declare const BooleanDropDown: FC<IBooleanDropDownProps>;
export default BooleanDropDown;
