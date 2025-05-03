import { FC } from 'react';
export interface IQueryBuilderPlainProps {
    value?: object;
    onChange?: (value: Object) => void;
    readOnly?: boolean;
}
export declare const QueryBuilderPlain: FC<IQueryBuilderPlainProps>;
export default QueryBuilderPlain;
