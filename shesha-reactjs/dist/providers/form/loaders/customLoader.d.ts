import { FormDataLoadingPayload, IFormDataLoader } from "./interfaces";
export declare class CustomLoader implements IFormDataLoader {
    #private;
    canLoadData: (_formArguments: any) => boolean;
    loadAsync: (payload: FormDataLoadingPayload) => Promise<any>;
}
