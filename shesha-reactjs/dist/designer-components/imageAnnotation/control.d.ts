import { FC } from 'react';
import { IImageProps } from './model';
interface IProps {
    model: IImageProps;
    onChange?: Function;
    value?: any;
}
declare const ImageAnnotationControl: FC<IProps>;
export default ImageAnnotationControl;
