import { lazy } from 'react';
import { Route } from 'react-router-dom';
import Client from './Client';

const HomeComponent = lazy(() => import('./pages/home/Home'));
const UsersComponent = lazy(() => import('./pages/users/Users'));

export const routes: JSX.Element = (
	<Route path='' element={<Client />}>
		<Route path='' element={<HomeComponent />} />
		<Route path='users' element={<UsersComponent />} />
	</Route>
);
