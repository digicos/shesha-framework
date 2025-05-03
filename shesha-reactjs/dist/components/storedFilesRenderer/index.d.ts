import { FC, ReactNode } from 'react';
import { ButtonProps } from 'antd';
export interface IStoredFilesRendererProps {
    ownerId?: string;
    ownerType?: string;
    isDragger?: boolean;
    uploadBtnProps?: ButtonProps;
    disabled?: boolean;
    noFilesCaption?: ReactNode;
    accept?: string[];
}
export declare const StoredFilesRenderer: FC<IStoredFilesRendererProps>;
export default StoredFilesRenderer;
