import { IShaFormInstance } from "../store/interfaces";
export type UseShaFormActionsArgs = {
    name: string;
    isActionsOwner: boolean;
    shaForm: IShaFormInstance;
};
export declare const useShaFormActions: ({ name, isActionsOwner, shaForm }: UseShaFormActionsArgs) => void;
