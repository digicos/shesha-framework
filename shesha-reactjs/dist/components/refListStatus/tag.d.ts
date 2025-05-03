import React, { FC, PropsWithChildren } from 'react';
interface ITagProps {
    color: string;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}
declare const RefTag: FC<PropsWithChildren<ITagProps>>;
export default RefTag;
