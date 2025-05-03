import { FormProviderWrapper } from "./formDesignerWrapper";
import { FormDesignerRenderer } from "./formDesignerRenderer";
import { FC } from "react";
import { FormIdentifier } from "../../interfaces";
interface IFormDesignerProps {
    formId: FormIdentifier;
}
declare const FormDesigner: FC<IFormDesignerProps>;
type InternalFormDesignerType = typeof FormDesigner;
interface IInternalFormDesignerInterface extends InternalFormDesignerType {
    Visual: typeof FormDesignerRenderer;
    NonVisual: typeof FormProviderWrapper;
}
declare const FormDesignerInterface: IInternalFormDesignerInterface;
export { FormDesignerInterface as FormDesigner, type IFormDesignerProps, };
