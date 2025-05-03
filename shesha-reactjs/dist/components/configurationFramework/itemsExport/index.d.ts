import { MutableRefObject } from 'react';
import { FC } from 'react';
export interface IExportInterface {
    exportExecuter: () => Promise<any>;
    canExport: boolean;
    exportInProgress: boolean;
}
export interface IConfigurationItemsExportProps {
    onExported?: () => void;
    exportRef: MutableRefObject<IExportInterface>;
}
export declare const ConfigurationItemsExport: FC<IConfigurationItemsExportProps>;
export default ConfigurationItemsExport;
