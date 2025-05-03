export declare const deepMergeValues: (target: any, source: any) => any;
export declare const getValueByPropertyName: (data: any, propertyName: string) => any;
export declare const setValueByPropertyName: (data: any, propertyName: string, value: any, makeCopy?: boolean) => any;
export declare const deepCopyViaJson: <TValue = any>(value: TValue) => TValue;
export declare const removeUndefinedProps: <T extends object>(value: T) => Partial<T>;
