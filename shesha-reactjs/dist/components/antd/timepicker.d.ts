import * as React from 'react';
import type { PickerProps, RangePickerProps } from 'antd/es/date-picker/generatePicker/interface';
import type { Moment } from 'moment';
export interface TimePickerProps extends Omit<PickerProps<Moment>, 'picker'> {
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<any>>;
export interface TimePickerRangeProps extends Omit<RangePickerProps<Moment>, 'picker'> {
}
declare const TimeRangePicker: React.ForwardRefExoticComponent<TimePickerRangeProps & React.RefAttributes<any>>;
type TimeSteps = Pick<RangePickerProps<Moment>, 'hourStep' | 'minuteStep' | 'secondStep'>;
export { TimePicker, TimeRangePicker, type TimeSteps };
