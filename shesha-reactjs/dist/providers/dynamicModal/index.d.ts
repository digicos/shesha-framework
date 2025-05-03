import { FC, PropsWithChildren } from 'react';
import { IModalProps } from './models';
export interface IDynamicModalProviderProps {
}
declare const DynamicModalProvider: FC<PropsWithChildren<IDynamicModalProviderProps>>;
declare function useDynamicModals(): {
    open: (modalProps: import("./models").ICommonModalProps) => void;
    modalExists: (id: string) => boolean;
    createModal: (modalProps: import("./models").ICommonModalProps) => void;
    removeModal: (id: string) => void;
    instances: {
        [index: string]: import("./models").IModalInstance;
    };
};
declare function useModal(modalProps: IModalProps): {
    open: () => void;
    close: () => void;
};
declare function useClosestModal(): import("./contexts").IDynamicModalInstanceContext;
export { DynamicModalProvider, useClosestModal, useDynamicModals, useModal };
