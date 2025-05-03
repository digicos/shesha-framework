import React from 'react';
import { IConfigurableCellProps, IFormCellProps } from '../interfaces';
import { ITableFormColumn } from '../../../../providers/dataTable/interfaces';
export declare const CreateFormCell: (props: IConfigurableCellProps<ITableFormColumn>) => React.JSX.Element;
export declare const FormCell: <D extends object = {}, V = number>(props: IFormCellProps<D, V>) => React.JSX.Element;
export default FormCell;
