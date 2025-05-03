import { FC, MutableRefObject } from 'react';
import { EntityConfigDto } from '../../apis/entityConfig';
export interface IEntityConfigTreeInstance {
    refresh: (id: string) => void;
    update: (item: EntityConfigDto) => void;
}
export interface IEntityConfigTreeProps {
    /**
     * A callback for when the value of this component changes
     */
    onChange?: (item: EntityConfigDto) => void;
    defaultSelected?: string;
    entityConfigTreeRef?: MutableRefObject<IEntityConfigTreeInstance | null>;
}
export declare const EntityConfigTree: FC<IEntityConfigTreeProps>;
export default EntityConfigTree;
