import { IToolboxComponentGroup } from '../../../interfaces/formDesigner';
import { IFormPersisterStateContext } from '../../../providers/formPersisterProvider/contexts';
export declare const getToolboxComponents: (devMode: boolean, formMetadata: Pick<IFormPersisterStateContext, "formId" | "formProps">) => IToolboxComponentGroup[];
