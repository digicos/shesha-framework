import { FC } from 'react';
import { IPersistedFormProps } from '../../index';
interface ILayoutHeaderProps {
    collapsed?: boolean;
    headerFormId?: IPersistedFormProps;
}
declare const LayoutHeader: FC<ILayoutHeaderProps>;
export default LayoutHeader;
