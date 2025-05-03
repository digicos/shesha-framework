import { FC, MutableRefObject, PropsWithChildren } from 'react';
interface IDragWrapperProps {
    componentId: string;
    componentRef: MutableRefObject<any>;
    readOnly?: boolean;
}
export declare const DragWrapper: FC<PropsWithChildren<IDragWrapperProps>>;
export default DragWrapper;
