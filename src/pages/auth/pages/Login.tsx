import { useState } from 'react';
import { useAppDispatch } from 'src/hooks';
import { login as loginState } from 'src/state/auth';
import { Response, LoginResponseData } from 'src/state/auth';
import Auth from '../components/Auth';

function Login() {
	const [error, setError] = useState<string>('');

	const dispatch = useAppDispatch();

	const login = async (credentials: { email: string; password: string }) => {
		const res = await dispatch(loginState(credentials));
		const payload = res.payload as Response<LoginResponseData>;

		if (!payload.success) setError(payload.error);
	};

	return <Auth type='login' login={login} error={error} />;
}

export default Login;
