import { NavDropdown, Image, ButtonGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStatus } from 'src/common';
import { useAppSelector } from 'src/hooks';
import { authSelect } from 'src/state/auth';
import style from './Profile.module.scss';
import './Profile.scss';

export function Profile() {
	const auth = useAppSelector(authSelect);

	const navigate = useNavigate();

	function handleBtnLink(path: string) {
		navigate(path);
	}

	const profileBtn = (
		<div className={style.profile}>
			<Image
				src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
				alt='Profile'
				className='img-fluid'
			/>
		</div>
	);
	return (
		<>
			<NavDropdown
				id='nav-dropdown-dark-example'
				title={profileBtn}
				className='profileDropdownContainer'
				align='end'
			>
				{auth.status === AuthStatus.LOGGED_OUT ? (
					<>
						<NavDropdown.ItemText>
							<ButtonGroup>
								<Button onClick={() => handleBtnLink('/auth/login')} variant='tertiary'>
									Sign In
								</Button>
								<Button onClick={() => handleBtnLink('/auth/signup')}>Sign Up</Button>
							</ButtonGroup>
						</NavDropdown.ItemText>
						<NavDropdown.Divider />
					</>
				) : null}

				<NavDropdown.ItemText>
					<Link to={'/users'}>All Users</Link>
				</NavDropdown.ItemText>
			</NavDropdown>
		</>
	);
}

export default Profile;
