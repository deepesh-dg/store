import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { reducers as authReducers } from './auth';
import { reducers as cartReducers } from './cart';

export const store = configureStore({
	reducer: {
		cart: cartReducers,
		auth: authReducers,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
