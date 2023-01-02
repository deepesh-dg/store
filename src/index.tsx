import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import { LazyLoading } from './components';
import { routes as clientRoutes } from './pages/client/Client.routes';
import { routes as authRoutes } from './pages/auth/Auth.routes';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<LazyLoading />}>
				{clientRoutes}
			</Route>
			<Route path='auth' element={<LazyLoading />}>
				{authRoutes}
			</Route>
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
