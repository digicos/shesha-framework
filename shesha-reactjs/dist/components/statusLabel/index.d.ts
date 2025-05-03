import { FC } from 'react';
type StatusLabelColor = 'red' | 'pink' | 'purple' | 'indigo' | 'blue' | 'lightblue' | 'cyan' | 'teal' | 'green' | 'lightgreen' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deeporange' | 'brown' | 'grey' | 'bluegrey' | 'aeroblue';
export interface IStatusLabelProps {
    text: string;
    color?: StatusLabelColor;
    customColor?: string;
}
export declare const StatusLabel: FC<IStatusLabelProps>;
export default StatusLabel;
