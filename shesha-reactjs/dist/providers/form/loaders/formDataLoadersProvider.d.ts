import React, { FC, PropsWithChildren } from 'react';
import { IFormDataLoader } from './interfaces';
export interface IFormDataLoadersContext {
    getFormDataLoader: (type: string) => IFormDataLoader;
}
export declare const FormDataLoadersContext: React.Context<IFormDataLoadersContext>;
export declare const FormDataLoadersProvider: FC<PropsWithChildren>;
export declare const useFormDataLoaders: () => IFormDataLoadersContext;
