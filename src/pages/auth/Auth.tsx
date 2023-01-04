import { Container, Image } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import style from './Auth.module.scss';
import logo from 'src/assets/images/black-logo.png';
import { useAppSelector } from 'src/hooks';
import { authSelect } from 'src/state/auth';
import { AuthStatus } from 'src/common';
import { useEffect } from 'react';

function Auth() {
	const auth = useAppSelector(authSelect);
	const loading = auth.status === AuthStatus.LOGGING_IN;
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.status === AuthStatus.LOGGED_IN) navigate('/', { replace: true });
	});

	return (
		<>
			<Container>
				<div className={style.logo}>
					<Link to={'/'}>
						<Image src={logo} alt='logo' fluid />
					</Link>
				</div>
				<div className={style.authContainer}>
					<div className={(loading ? 'overlayLoader ' : '') + style.auth}>
						<Outlet />
					</div>
				</div>
			</Container>
		</>
	);
}

export default Auth;
