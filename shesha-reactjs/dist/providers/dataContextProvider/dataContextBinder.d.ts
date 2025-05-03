import { FC, PropsWithChildren } from "react";
import { IModelMetadata } from "../../interfaces/metadata";
import { ContextGetData, ContextGetFieldValue, ContextOnChangeData, ContextSetData, ContextSetFieldValue, DataContextType, IDataContextProviderActionsContextOverride } from "./contexts";
export interface IDataContextBinderProps {
    id: string;
    name: string;
    description?: string;
    type: DataContextType;
    data?: any;
    api?: any;
    metadata?: Promise<IModelMetadata>;
    getData?: ContextGetData;
    getFieldValue?: ContextGetFieldValue;
    setData?: ContextSetData;
    setFieldValue?: ContextSetFieldValue;
    onChangeData?: ContextOnChangeData;
    actionsOverride?: IDataContextProviderActionsContextOverride;
}
declare const DataContextBinder: FC<PropsWithChildren<IDataContextBinderProps>>;
export default DataContextBinder;
