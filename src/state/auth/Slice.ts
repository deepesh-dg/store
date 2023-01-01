import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/common';
import { RootState } from '../store';
import { login, signup } from './Actions';

export type AuthState = {
	accessToken?: string;
	refreshToken?: string;
	status: AuthStatus;
};

const initialAuth: AuthState = {
	status: AuthStatus.LOGGED_OUT,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuth,
	reducers: {
		logout: (state) => {
			state = { ...initialAuth };
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = AuthStatus.LOGGING_IN;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = action.payload.success ? AuthStatus.LOGGED_IN : AuthStatus.LOGGED_OUT;
				state.accessToken = action.payload.data?.access_token;
				state.refreshToken = action.payload.data?.refresh_token;
			})
			.addCase(login.rejected, (state) => {
				state.status = AuthStatus.LOGGED_OUT;
			})
			.addCase(signup.pending, (state) => {
				state.status = AuthStatus.LOGGING_IN;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.status = AuthStatus.LOGGED_OUT;
			})
			.addCase(signup.rejected, (state) => {
				state.status = AuthStatus.LOGGED_OUT;
			});
	},
});

export const authSelect = (state: RootState) => state.auth;
