import { lazy } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const AuthComponent = lazy(() => import('./Auth'));

export const routes: JSX.Element = (
	<Route path='' element={<AuthComponent />}>
		<Route path='login' element={<Login />} />
		<Route path='signup' element={<Signup />} />
	</Route>
);
