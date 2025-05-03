import { IKeyValue } from "../../../interfaces/keyValue";
export interface IApiCallArguments {
    url: string;
    verb: string;
    parameters: IKeyValue[];
    headers: IKeyValue[];
    sendStandardHeaders: boolean;
}
export declare const apiCallArgumentsForm: import("../../../providers").IConfigurableFormComponent[];
export declare const useApiCallAction: () => void;
