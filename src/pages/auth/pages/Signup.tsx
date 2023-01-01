import Auth from '../components/Auth';
import { SignupResponseData, Response, signup as signupState } from 'src/state/auth';
import { useState } from 'react';
import { useAppDispatch } from 'src/hooks';
import { useNavigate } from 'react-router-dom';

function Signup() {
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const signup = async ({
		avatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
		...data
	}: {
		avatar?: string;
		name: string;
		email: string;
		password: string;
	}) => {
		const res = await dispatch(signupState({ avatar, ...data }));
		const payload = res.payload as Response<SignupResponseData>;

		if (payload.success) navigate('../login');
		else setError(payload.error);
	};

	return <Auth type='signup' signup={signup} error={error} />;
}

export default Signup;
