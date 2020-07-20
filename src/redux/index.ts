import { createStore, applyMiddleware, Action } from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import { rootReducer } from './root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const configStore = ()=>{
    const middleware = [thunk];
    const store = createStore(rootReducer, {},composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}