import { IConfigurableActionConfiguration } from '../../interfaces/configurableAction';
import { IWizardSequence, IWizardStepProps } from './models';
export declare const EXPOSED_VARIABLES: {
    id: string;
    name: string;
    description: string;
    type: string;
}[];
export declare const getStepDescritpion: (show: boolean, sequence: IWizardSequence, currentIndex: number) => (description: string, index: number) => string;
export declare const getWizardButtonStyle: (buttonsLayout: "left" | "right" | "spaceBetween") => (type: "back" | "cancel" | "next") => {};
export declare const getWizardStep: (steps: IWizardStepProps[], current: number, type: "back" | "next" | "reset") => number;
export declare const isEmptyArgument: (args: IConfigurableActionConfiguration) => boolean;
