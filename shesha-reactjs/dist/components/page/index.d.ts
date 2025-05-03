import { FC, PropsWithChildren } from 'react';
import { IStatusTagProps } from '../../components/statusTag';
import { FormIdentifier } from '../../providers/form/models';
export interface IPageHeadProps {
    readonly title?: string;
    readonly description?: string;
    readonly url?: string;
    readonly ogImage?: string;
    readonly formId?: FormIdentifier;
    readonly formMode?: string;
}
export interface IBreadcrumbItem {
    text: string;
    link?: string;
}
export interface IPageProps extends IPageHeadProps {
    backUrl?: string;
    breadcrumbItems?: IBreadcrumbItem[];
    loading?: boolean;
    noPadding?: boolean;
    loadingText?: string;
    status?: IStatusTagProps;
}
export declare const Page: FC<PropsWithChildren<IPageProps>>;
