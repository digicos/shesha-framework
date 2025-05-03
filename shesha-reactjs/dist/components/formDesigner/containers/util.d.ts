import { CSSProperties } from 'react';
import { IComponentsContainerProps } from './componentsContainer';
type AlignmentProps = Pick<IComponentsContainerProps, 'direction' | 'justifyContent' | 'alignItems' | 'justifyItems' | 'flexDirection' | 'justifySelf' | 'alignSelf' | 'textJustify' | 'gap' | 'gridColumnsCount' | 'display' | 'flexWrap'>;
export declare const getAlignmentStyle: ({ direction, justifyContent, alignItems, justifyItems, gridColumnsCount, display, flexDirection, justifySelf, alignSelf, textJustify, gap, flexWrap, }: AlignmentProps) => CSSProperties;
export {};
