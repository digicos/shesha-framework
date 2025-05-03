import type { Moment } from 'moment';
declare const MomentDatePicker: (<ValueType = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, import("antd/es/date-picker/generatePicker").PickerProps<Moment>, ValueType>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    displayName?: string | undefined;
} & {
    displayName?: string | undefined;
    WeekPicker: (<ValueType_1 = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, Omit<import("antd/es/date-picker/generatePicker").PickerProps<Moment>, "picker">, ValueType_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
    MonthPicker: (<ValueType_1 = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, Omit<import("antd/es/date-picker/generatePicker").PickerProps<Moment>, "picker">, ValueType_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
    YearPicker: (<ValueType_1 = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, Omit<import("antd/es/date-picker/generatePicker").PickerProps<Moment>, "picker">, ValueType_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
    RangePicker: import("react").ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<Moment>, "locale" | "generateConfig" | "hideHeader"> & {
        locale?: import("antd/es/date-picker/generatePicker").PickerLocale | undefined;
        size?: import("antd/es/button").ButtonSize;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
        variant?: "filled" | "outlined" | "borderless" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
        popupStyle?: import("react").CSSProperties | undefined;
    } & import("react").RefAttributes<import("rc-picker").PickerRef>>;
    TimePicker: (<ValueType_2 = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, Omit<import("antd/es/date-picker/generatePicker/interface").GenericTimePickerProps<Moment>, "picker">, ValueType_2>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
    QuarterPicker: (<ValueType_1 = Moment>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<Moment, Omit<import("antd/es/date-picker/generatePicker").PickerProps<Moment>, "picker">, ValueType_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
};
export { MomentDatePicker as DatePicker };
