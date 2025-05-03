import { FC } from 'react';
import { ReactNodeOrFunc } from '../../components/nodeOrFuncRenderer';
import { IToolbarItem } from '../../interfaces';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface IIndexToolbarProps {
    items: IToolbarItem[];
    elementsRight?: ReactNodeOrFunc;
    className?: string;
    btnSize?: SizeType;
}
export declare const IndexToolbar: FC<IIndexToolbarProps>;
export default IndexToolbar;
