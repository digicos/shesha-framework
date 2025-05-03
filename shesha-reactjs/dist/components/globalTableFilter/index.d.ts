import { FC } from 'react';
import { SearchProps } from 'antd/lib/input';
export interface IGlobalTableFilterProps {
    searchProps?: SearchProps;
    block?: boolean;
}
export declare const GlobalTableFilter: FC<IGlobalTableFilterProps>;
export default GlobalTableFilter;
