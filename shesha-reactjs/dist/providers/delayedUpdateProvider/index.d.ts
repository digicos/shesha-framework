import { FC, PropsWithChildren } from 'react';
interface IDelayedUpdateProps {
}
declare const DelayedUpdateProvider: FC<PropsWithChildren<IDelayedUpdateProps>>;
declare const useDelayedUpdate: (require?: boolean) => {
    groups: import("./models").IDelayedUpdateGroup[];
    addItem: (groupName: string, id: any, data?: any) => void;
    removeItem: (groupName: string, id: any) => void;
    getPayload: () => import("./models").IDelayedUpdateGroup[];
};
export { DelayedUpdateProvider, useDelayedUpdate };
