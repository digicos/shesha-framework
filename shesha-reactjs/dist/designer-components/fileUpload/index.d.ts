import { IFormItem, IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IFileUploadProps extends IConfigurableFormComponent, Omit<IFormItem, 'name'> {
    ownerId: string;
    ownerType: string;
    allowUpload?: boolean;
    allowReplace?: boolean;
    allowDelete?: boolean;
    useSync?: boolean;
    allowedFileTypes?: string[];
    isDragger?: boolean;
}
declare const FileUploadComponent: IToolboxComponent<IFileUploadProps>;
export default FileUploadComponent;
