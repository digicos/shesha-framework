import { ModalProps } from 'antd';
import { FC } from 'react';
interface IStackedNavigationModalProps extends ModalProps {
    parentId?: string;
}
declare const StackedNavigationModal: FC<IStackedNavigationModalProps>;
export { StackedNavigationModal };
export default StackedNavigationModal;
