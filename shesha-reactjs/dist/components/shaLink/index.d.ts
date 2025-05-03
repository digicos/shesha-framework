import { FC, PropsWithChildren, ReactNode } from 'react';
import { FormIdentifier } from '../../interfaces';
export interface IShaLinkProps {
    linkTo?: string;
    icon?: ReactNode;
    linkToForm?: FormIdentifier;
    params?: any;
    /**
     * @deprecated - pass children instead
     */
    displayName?: string;
    className?: string;
}
export declare const ShaLink: FC<PropsWithChildren<IShaLinkProps>>;
export default ShaLink;
