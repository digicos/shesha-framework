export interface IValidationErrorInfo {
    message?: string | null;
    members?: string | null[] | null;
}
export interface IErrorInfo {
    code?: number | null;
    message?: string | null;
    details?: string | null;
    validationErrors?: IValidationErrorInfo[] | null;
}
export interface IHasErrorInfo {
    errorInfo: IErrorInfo;
}
export declare const isErrorInfo: (value: any) => value is IErrorInfo;
export declare const isHasErrorInfo: (value: any) => value is IHasErrorInfo;
