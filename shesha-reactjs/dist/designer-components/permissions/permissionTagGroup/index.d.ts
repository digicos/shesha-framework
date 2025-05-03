import { IAutocompleteTagsOutlinedComponentProps } from '../../autocompleteTagGroup';
declare const PermissionTagGroupComponent: {
    type: string;
    name: string;
    initModel: (model: any) => IAutocompleteTagsOutlinedComponentProps;
    isInput: boolean;
    isOutput?: boolean;
    canBeJsSetting?: boolean;
    icon: import("react").ReactNode;
    tooltip?: import("react").ReactNode;
    isHidden?: boolean;
    Factory?: import("../../..").FormFactory<IAutocompleteTagsOutlinedComponentProps>;
    linkToModelMetadata?: (model: IAutocompleteTagsOutlinedComponentProps, metadata: import("../../..").IPropertyMetadata) => IAutocompleteTagsOutlinedComponentProps;
    getContainers?: (model: IAutocompleteTagsOutlinedComponentProps) => import("../../..").IFormComponentContainer[];
    customContainerNames?: string[];
    settingsFormFactory?: import("../../..").ISettingsFormFactory<IAutocompleteTagsOutlinedComponentProps>;
    settingsFormMarkup?: import("../../..").FormMarkup;
    validateSettings?: (model: IAutocompleteTagsOutlinedComponentProps) => Promise<any>;
    dataTypeSupported?: (dataTypeInfo: {
        dataType: string;
        dataFormat?: string;
    }) => boolean;
    isTemplate?: boolean;
    build?: (allComponents: import("../../..").IToolboxComponents) => import("../../..").IConfigurableFormComponent[];
    migrator?: import("../../..").SettingsMigrator<IAutocompleteTagsOutlinedComponentProps>;
    getFieldsToFetch?: (propertyName: string, rawModel: IAutocompleteTagsOutlinedComponentProps, metadata: import("../../..").IModelMetadata) => string[];
};
export default PermissionTagGroupComponent;
