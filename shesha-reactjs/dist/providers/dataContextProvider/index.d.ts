import { IModelMetadata } from "../../interfaces/metadata";
import { IConfigurableActionConfiguration } from "../../providers";
import { FC, PropsWithChildren } from "react";
import { DataContextType, ContextOnChangeData } from "./contexts";
export interface IDataContextProviderProps {
    id: string;
    name: string;
    description?: string;
    type: DataContextType;
    initialData?: Promise<any>;
    metadata?: Promise<IModelMetadata>;
    onChangeData?: ContextOnChangeData;
    onChangeAction?: IConfigurableActionConfiguration;
    onInitAction?: IConfigurableActionConfiguration;
}
export declare const DataContextProvider: FC<PropsWithChildren<IDataContextProviderProps>>;
