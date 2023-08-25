import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { userReducer } from 'entities/User';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        user: userReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
