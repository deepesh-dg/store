import { Navbar } from 'react-bootstrap';
import logo from 'src/assets/images/white-logo.png';
import style from './Brand.module.scss';
import { Link } from 'react-router-dom';

export function Brand() {
	return (
		<Navbar.Brand>
			<Link to={'/'}>
				<img alt='' src={logo} className={style.navbarImage + ' img-fluid'} />
			</Link>
		</Navbar.Brand>
	);
}

export default Brand;
