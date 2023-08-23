import { configureStore } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
