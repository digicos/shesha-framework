import React, { PropsWithChildren } from 'react';
import { IDynamicActionsContext } from './contexts';
import { ButtonGroupItemProps } from '../../providers/buttonGroupConfigurator/models';
import { DynamicItemsEvaluationHook, DynamicRenderingHoc } from '../../providers/dynamicActionsDispatcher/models';
import { IProviderSettingsFormFactory } from '../../designer-components/dynamicActionsConfigurator/interfaces';
import { FormMarkup } from '../../interfaces';
export interface IDynamicActionsProps<TSettings> {
    id?: string;
    name: string;
    renderingHoc?: DynamicRenderingHoc;
    useEvaluator: DynamicItemsEvaluationHook;
    hasArguments?: boolean;
    /**
     * Settings form factory
     */
    settingsFormFactory?: IProviderSettingsFormFactory<TSettings>;
    settingsFormMarkup?: FormMarkup;
}
export interface IHasActions {
    items: ButtonGroupItemProps[];
}
declare const DynamicActionsProvider: <TSettings>({ id, name, useEvaluator, children, hasArguments, settingsFormFactory, settingsFormMarkup }: PropsWithChildren<IDynamicActionsProps<TSettings>>) => React.JSX.Element;
declare function useDynamicActions(require: boolean): IDynamicActionsContext;
export { DynamicActionsProvider, useDynamicActions };
