import { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Screen } from '../../common';
import { Left, Middle, Right } from './components';
import style from './header.module.scss';

export function Header() {
	const desktopElements = (
		<>
			<Middle /> <Right />
		</>
	);

	const mobileElements = (
		<>
			<Right /> <Middle />
		</>
	);

	let [elements, setElements] = useState<JSX.Element>(
		window.screen.width >= Screen.LG ? desktopElements : mobileElements
	);

	const handleScreen = () => {
		setElements(window.screen.width >= Screen.LG ? desktopElements : mobileElements);
	};

	useEffect(() => {
		console.log('header rendered');

		window.addEventListener('resize', handleScreen);

		return () => {
			window.removeEventListener('resize', handleScreen);
		};
	});

	return (
		<header id='header' className={style.header + ' sticky-top'}>
			<Navbar bg='secondary' variant='secondary' collapseOnSelect expand='lg'>
				<Container fluid>
					<div className={style.left}>
						<Left />
					</div>
					{elements}
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
