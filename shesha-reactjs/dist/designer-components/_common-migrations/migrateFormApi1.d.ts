import { IConfigurableFormComponent } from "../../index";
export declare const migrateFormApi: {
    setFormData: (expr: string) => string;
    formData: (expr: string) => string;
    formMode: (expr: string) => string;
    withoutFormData: (expr: string) => string;
    full: (expr: string) => string;
    events: <T extends IConfigurableFormComponent>(model: T) => T;
    properties: <T>(model: T) => T;
    eventsAndProperties: <T extends IConfigurableFormComponent>(model: T) => T;
};
