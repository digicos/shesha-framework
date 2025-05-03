import React, { FC, PropsWithChildren } from 'react';
import { IFormDataSubmitter } from './interfaces';
export interface IFormDataSubmittersContext {
    getFormDataSubmitter: (type: string) => IFormDataSubmitter;
}
export declare const FormDataSubmittersContext: React.Context<IFormDataSubmittersContext>;
export declare const FormDataSubmittersProvider: FC<PropsWithChildren>;
export declare const useFormDataSubmitters: () => IFormDataSubmittersContext;
