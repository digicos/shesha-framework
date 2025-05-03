import { IInputDirection, IValue } from '../interfaces';
export declare const getStyleChangeValue: (type: keyof IValue, direction: keyof IInputDirection, value: string, prevVal: string) => string;
export declare const getStyleValue: (type: keyof IValue, direction: keyof IInputDirection, value: string) => any;
