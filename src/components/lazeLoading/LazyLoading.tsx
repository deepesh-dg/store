import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function LazyLoading() {
	return (
		<Suspense fallback={<h1 className='text-center py-3'>Loading...</h1>}>
			<Outlet />
		</Suspense>
	);
}

export default LazyLoading;
