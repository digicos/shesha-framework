import { FC } from 'react';
import { IFormMarkupResponse } from '../../providers/form/api';
import { IChildEntitiesTagGroupProps } from './models';
interface IProps extends IChildEntitiesTagGroupProps {
    formInfo?: IFormMarkupResponse['formConfiguration'];
    error: IFormMarkupResponse['error'] | any;
    readOnly?: boolean;
    loading: boolean;
    open: boolean;
    onToggle: Function;
    onChange: (data: any) => void;
}
declare const ChildEntitiesTagGroupModal: FC<IProps>;
export default ChildEntitiesTagGroupModal;
