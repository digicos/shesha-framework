import { IListEditorStateContext } from './contexts';
import { ReduxCompatibleReducer } from 'redux-actions';
declare const reducerFactory: <TItem extends unknown>(initialState: IListEditorStateContext<TItem>) => ReduxCompatibleReducer<IListEditorStateContext<TItem>, any>;
export default reducerFactory;
