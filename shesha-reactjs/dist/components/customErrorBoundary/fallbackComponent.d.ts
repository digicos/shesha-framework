import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
interface ICustomErrorBoundaryFallbackProps extends FallbackProps {
    fullScreen?: boolean;
}
declare const CustomErrorBoundaryFallbackComponent: FC<ICustomErrorBoundaryFallbackProps>;
export default CustomErrorBoundaryFallbackComponent;
