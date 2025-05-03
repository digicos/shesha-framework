import { FC, PropsWithChildren } from 'react';
import { IReadOnlyDisplayFormItemProps } from './models';
interface IProps extends IReadOnlyDisplayFormItemProps {
    readOnly: boolean;
}
declare const ReadOnlyDisplayFormItemWrapper: FC<PropsWithChildren<IProps>>;
export default ReadOnlyDisplayFormItemWrapper;
