import { MutableRefObject } from 'react';
import { FC } from 'react';
export interface IImportInterface {
    importExecuter: () => Promise<any>;
}
export interface IConfigurationItemsImportProps {
    onImported?: () => void;
    importRef?: MutableRefObject<IImportInterface>;
}
export declare const ConfigurationItemsImport: FC<IConfigurationItemsImportProps>;
export default ConfigurationItemsImport;
