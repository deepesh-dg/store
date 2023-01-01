import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import Auth from './pages/auth/Auth';
import Login from './pages/auth/pages/Login';
import Signup from './pages/auth/pages/Signup';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'auth',
		element: <Auth />,
		children: [
			{
				path: 'signup',
				element: <Login />,
			},
			{
				path: 'login',
				element: <Signup />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
