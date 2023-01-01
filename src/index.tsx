import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import Auth from './pages/auth/Auth';
import Login from './pages/auth/pages/Login';
import Signup from './pages/auth/pages/Signup';
import { Footer, Header } from './components';
import Users from './pages/Users/Users';

const defaultLayout = (elements?: JSX.Element): JSX.Element => {
	return (
		<>
			<Header />
			{elements}
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: defaultLayout(<Home />),
	},
	{
		path: 'auth',
		element: <Auth />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <Signup />,
			},
		],
	},
	{
		path: 'users',
		element: defaultLayout(<Users />),
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
