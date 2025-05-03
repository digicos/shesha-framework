import { FC, ReactNode } from 'react';
export interface IProtectedContentProps {
    permissionName: string;
    children?: ReactNode;
}
export declare const ProtectedContent: FC<IProtectedContentProps>;
export default ProtectedContent;
