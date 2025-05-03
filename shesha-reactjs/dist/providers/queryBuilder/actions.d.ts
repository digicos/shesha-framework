import { IProperty } from './models';
export declare enum QueryBuilderActionEnums {
    SetFields = "SET_FIELDS"
}
export declare const setFieldsAction: import("redux-actions").ActionFunction1<IProperty[], import("redux-actions").Action<IProperty[]>>;
