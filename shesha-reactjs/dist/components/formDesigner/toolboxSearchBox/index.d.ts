import { FC } from 'react';
export interface ISearchBoxProps {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}
export declare const SearchBox: FC<ISearchBoxProps>;
export default SearchBox;
