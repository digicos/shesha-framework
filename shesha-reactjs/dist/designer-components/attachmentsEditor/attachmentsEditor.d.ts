import { IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
export interface IAttachmentsEditorProps extends IConfigurableFormComponent {
    ownerId: string;
    ownerType: string;
    filesCategory?: string;
    allowedFileTypes?: string[];
    ownerName?: string;
    allowAdd: boolean;
    allowDelete: boolean;
    allowReplace: boolean;
    allowRename: boolean;
    isDragger?: boolean;
    maxHeight?: string;
    onFileChanged?: string;
    downloadZip?: boolean;
}
declare const AttachmentsEditor: IToolboxComponent<IAttachmentsEditorProps>;
export default AttachmentsEditor;
