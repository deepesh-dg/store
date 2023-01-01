import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
