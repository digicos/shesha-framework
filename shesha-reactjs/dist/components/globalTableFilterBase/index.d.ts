import { FC } from 'react';
import { SearchProps } from 'antd/lib/input';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface IGlobalTableFilterBaseProps {
    searchProps?: SearchProps;
    changeQuickSearch: (val: string) => void;
    performQuickSearch?: (val: string) => void;
    quickSearch: string;
    size?: SizeType;
    block?: boolean;
}
export declare const GlobalTableFilterBase: FC<IGlobalTableFilterBaseProps>;
export default GlobalTableFilterBase;
