import { ReduxCompatibleReducer } from 'redux-actions';
import { IConfigurableComponentStateContext } from './contexts';
declare const reducerFactory: <TSettings extends unknown>(initialState: IConfigurableComponentStateContext<TSettings>) => ReduxCompatibleReducer<IConfigurableComponentStateContext<TSettings>, any>;
export default reducerFactory;
