import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { conf } from 'src/conf';
import { User } from 'src/pages/Users/common';
import { authSlice } from './Slice';

export type LoginResponseData = { access_token: string; refresh_token: string };

export type SignupResponseData = User;

export type Response<T> = {
	data?: T;
	error: string;
	success: boolean;
};

export const login = createAsyncThunk(
	'/auth/login',
	async (credentials: { email: string; password: string }) => {
		const res: Response<LoginResponseData> = {
			success: false,
			data: { access_token: '', refresh_token: '' },
			error: '',
		};

		try {
			const response = await axios.post<LoginResponseData>('auth/login', credentials, {
				baseURL: conf.api,
			});

			res.data = response.data;
			res.success = true;
		} catch (e) {
			res.error = (e as any).response.data.message;
		}

		return res;
	}
);

export const signup = createAsyncThunk(
	'/auth/signup',
	async (data: { avatar: string; name: string; email: string; password: string }) => {
		const res: Response<SignupResponseData> = {
			success: false,
			error: '',
		};

		try {
			const response = await axios.post<SignupResponseData>('users', data, {
				baseURL: conf.api,
			});

			res.data = response.data;
			res.success = true;
		} catch (e) {
			res.error = (e as any).response.data.message;
		}

		return res;
	}
);

export const actions = authSlice.actions;
