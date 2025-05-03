import { FC } from 'react';
interface IErrorMessage {
    maxPoints: number;
    maxReached?: boolean;
    isReadonly: boolean;
    width?: number;
    url?: string;
    notFoundUrl?: boolean;
}
declare const WarningMessage: FC<IErrorMessage>;
export default WarningMessage;
