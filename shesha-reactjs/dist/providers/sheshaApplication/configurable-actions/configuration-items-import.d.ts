import { IImportInterface } from '../../../components/configurationFramework/itemsImport';
import { FC, MutableRefObject } from 'react';
interface IConfigurationItemsExportFooterProps {
    hideModal: () => void;
    importerRef: MutableRefObject<IImportInterface>;
}
export declare const ConfigurationItemsExportFooter: FC<IConfigurationItemsExportFooterProps>;
export declare const useConfigurationItemsImportAction: () => void;
export {};
