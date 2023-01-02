import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'src/components';
import style from './Client.module.scss';

function Client() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Client;
