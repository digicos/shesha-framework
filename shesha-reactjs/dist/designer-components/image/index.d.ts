import { IFormItem, IToolboxComponent } from '../../interfaces';
import { IConfigurableFormComponent } from '../../providers/form/models';
import { ImageSourceType } from './image';
export interface IImageProps extends IConfigurableFormComponent, IFormItem {
    height?: number | string;
    width?: number | string;
    url?: string;
    storedFileId?: string;
    base64?: string;
    dataSource?: ImageSourceType;
    ownerType?: string;
    ownerId?: string;
    fileCategory?: string;
    allowPreview?: boolean;
    allowedFileTypes?: string[];
    alt?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
    objectPosition?: string;
    filter?: string;
    borderSize?: number;
    borderRadius?: number;
    borderType?: string;
    borderColor?: string;
    stylingBox?: string;
    opacity?: number;
}
declare const ImageComponent: IToolboxComponent<IImageProps>;
export default ImageComponent;
