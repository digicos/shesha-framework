import { WidgetProps } from '@react-awesome-query-builder/antd';
import { FC, PropsWithChildren } from 'react';
export interface FieldWidgetProviderProps {
    widgetProps: WidgetProps;
}
export declare const FieldWidgetProvider: FC<PropsWithChildren<FieldWidgetProviderProps>>;
export declare const useFieldWidget: () => WidgetProps;
