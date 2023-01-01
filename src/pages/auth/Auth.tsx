import { useLocation } from 'react-router-dom';

function Auth() {
	let location = useLocation();
	const paths = location.pathname.split('/');
	const path = paths[paths.length - 1];

	return <div>{path}</div>;
}

export default Auth;
