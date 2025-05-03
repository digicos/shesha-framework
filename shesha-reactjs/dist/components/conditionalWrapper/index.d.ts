import { FC, PropsWithChildren, ReactNode } from "react";
export interface IConditionalWrapProps {
    condition: boolean;
    wrap: (children: ReactNode) => ReactNode;
}
export declare const ConditionalWrap: FC<PropsWithChildren<IConditionalWrapProps>>;
export default ConditionalWrap;
