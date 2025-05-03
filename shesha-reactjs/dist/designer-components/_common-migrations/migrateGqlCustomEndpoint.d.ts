import { IFormSettings } from "../../interfaces";
export declare const migrateGqlCustomEndpoint: (prev: IFormSettings) => IFormSettings | {
    dataLoadersSettings: {
        gql: {
            staticEndpoint: {
                url: never;
                httpVerb: string;
            };
            excludeFormFields?: string;
            endpointType: import("../../providers/form/submitters/interfaces").SubmitterEndpointType;
            dynamicEndpoint?: string;
        };
    };
    version?: -1 | 1 | null | undefined;
    fieldsToFetch?: string[];
    excludeFormFieldsInPayload?: string;
    postUrl?: string;
    putUrl?: string;
    deleteUrl?: string;
    getUrl?: string;
    initialValues?: import("../../interfaces/keyValue").IKeyValue[];
    preparedValues?: string;
    onInitialized?: string;
    onDataLoaded?: string;
    onUpdate?: string;
    modelType?: string;
    layout: import("antd/lib/form/Form").FormLayout;
    colon: boolean;
    labelCol: import("antd").ColProps;
    wrapperCol: import("antd").ColProps;
    size?: import("antd/lib/button").ButtonSize;
    isSettingsForm?: boolean;
    permissions?: string[];
    access?: number;
    dataLoaderType?: string;
    dataSubmitterType?: string;
    dataSubmittersSettings?: import("../../interfaces").IDictionary<object>;
    onBeforeDataLoad?: string;
    onAfterDataLoad?: string;
    onValuesUpdate?: string;
    onPrepareSubmitData?: string;
    onBeforeSubmit?: string;
    onSubmitSuccess?: string;
    onSubmitFailed?: string;
};
