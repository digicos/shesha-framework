import { IInputDirection, IValue } from '../interfaces';
export declare const getStyleClassName: (type: keyof IValue, direction: keyof IInputDirection) => string;
export declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    shaStyleBox: string;
    center: string;
    margTop: string;
    margLeft: string;
    margBottom: string;
    margRight: string;
    margin: string;
    paddTop: string;
    paddLeft: string;
    paddBottom: string;
    paddRight: string;
    padding: string;
    title: string;
}>;
