import { lazy } from 'react';
import { Route } from 'react-router-dom';
import Client from './Client';

const HomeComponent = lazy(() => import('./pages/home/Home'));
const UsersComponent = lazy(() => import('./pages/users/Users'));
const CartComponent = lazy(() => import('./pages/cart/Cart'));
const CategoryComponent = lazy(() => import('./pages/category/Category'));

export const routes: JSX.Element = (
	<Route path='' element={<Client />}>
		<Route path='' element={<HomeComponent />} />
		<Route path='users' element={<UsersComponent />} />
		<Route path='cart' element={<CartComponent />} />
		<Route path='category/:categoryId' element={<CategoryComponent />} />
	</Route>
);
