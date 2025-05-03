import { RadioChangeEvent, SpaceProps } from 'antd';
import { IConfigurableFormComponent } from '../../interfaces';
import { IReferenceListIdentifier } from '../../interfaces/referenceList';
import { CSSProperties } from 'react';
import { ReferenceListItemDto } from '../../apis/referenceList';
import { DataSourceType, ILabelValue } from '../../designer-components/dropdown/model';
export interface IRadioProps extends Omit<IConfigurableFormComponent, 'style'> {
    items?: ILabelValue[];
    /**
     * @deprecated - use referenceListId instead
     */
    referenceListNamespace?: string;
    /**
     * @deprecated - use referenceListId instead
     */
    referenceListName?: string;
    referenceListId?: IReferenceListIdentifier;
    dataSourceType: DataSourceType;
    direction?: SpaceProps['direction'];
    value?: any;
    onChange?: (e: RadioChangeEvent) => void;
    style?: CSSProperties;
    dataSourceUrl?: string;
    reducerFunc?: string;
}
export declare const getDataSourceList: (dataSource: DataSourceType, values: ILabelValue[], refList: ReferenceListItemDto[], urlList?: ILabelValue<any>[]) => ILabelValue[];
