import { IModelMetadata } from '../../../interfaces/metadata';
import { ApplicationPluginRegistration } from '../context/applicationContext';
export interface UseApplicationContextMetadataProps {
    plugins: ApplicationPluginRegistration[];
}
/**
 * Generate and return context metadata for the application.
 *
 * @return {Promise<IModelMetadata>} Promise representing the context metadata for the application.
 */
export declare const useApplicationContextMetadata: (props: UseApplicationContextMetadataProps) => Promise<IModelMetadata>;
