import { FC } from 'react';
interface IFormComponentDisplayProps {
    value?: any;
    className?: string;
    editable?: boolean;
    onEdit?: (args: any) => any;
}
export declare const FormComponentDisplay: FC<IFormComponentDisplayProps>;
export default FormComponentDisplay;
