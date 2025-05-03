import { MenuProps } from 'antd';
import React from 'react';
type MenuItem = MenuProps['items'][number];
export declare function getButtonGroupMenuItem(label: React.ReactNode, key: React.Key, disabled?: boolean, children?: MenuItem[]): MenuItem;
export {};
