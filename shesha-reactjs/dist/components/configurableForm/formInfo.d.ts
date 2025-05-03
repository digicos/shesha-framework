import { FC } from 'react';
import { IPersistedFormProps } from '../../providers/form/models';
export interface FormInfoProps {
    /**
     * Persisted form props
     */
    formProps: IPersistedFormProps;
    /**
     * Is used for update of the form markup. If value of this handler is not defined - the form is read-only
     */
    onMarkupUpdated?: () => void;
}
export declare const FormInfo: FC<FormInfoProps>;
export default FormInfo;
