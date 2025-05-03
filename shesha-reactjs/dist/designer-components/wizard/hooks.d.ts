import { IConfigurableFormComponent } from '../../providers';
import { IWizardComponentProps, IWizardStepProps } from './models';
interface IWizardComponent {
    back: () => void;
    components: IConfigurableFormComponent[];
    current: number;
    currentStep: IWizardStepProps;
    cancel: () => void;
    done: () => void;
    content: (description: string, index: number) => string;
    next: () => void;
    visibleSteps: IWizardStepProps[];
}
export declare const useWizard: (model: Omit<IWizardComponentProps, "size">) => IWizardComponent;
export {};
