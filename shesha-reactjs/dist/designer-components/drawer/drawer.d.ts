import { FC } from 'react';
import { DrawerProps } from 'antd';
import { IDrawerProps } from './models';
export interface IShaDrawerProps extends Omit<IDrawerProps, 'style' | 'size'>, Omit<DrawerProps, 'id'> {
}
declare const ShaDrawer: FC<IShaDrawerProps>;
export { ShaDrawer };
export default ShaDrawer;
