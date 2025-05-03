import React from 'react';
export interface IEmptyStateProps {
    noDataIcon?: string;
    noDataText?: string;
    noDataSecondaryText?: string;
}
declare const EmptyState: React.FC<IEmptyStateProps>;
export default EmptyState;
