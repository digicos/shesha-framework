import { IExportInterface } from '../../../components/configurationFramework/itemsExport';
import { FC, MutableRefObject } from 'react';
interface IConfigurationItemsExportFooterProps {
    hideModal: () => void;
    exporterRef: MutableRefObject<IExportInterface>;
}
export declare const ConfigurationItemsExportFooter: FC<IConfigurationItemsExportFooterProps>;
export declare const useConfigurationItemsExportAction: () => void;
export {};
