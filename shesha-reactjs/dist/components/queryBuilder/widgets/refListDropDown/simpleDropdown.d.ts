import { IGenericRefListDropDownProps } from '../../../../components/refListDropDown/models';
import { FC } from 'react';
export type IRefListSimpleDropdownProps = Pick<IGenericRefListDropDownProps, 'onChange' | 'referenceListId' | 'style' | 'size' | 'value' | 'readOnly'>;
export declare const RefListSimpleDropdown: FC<IRefListSimpleDropdownProps>;
