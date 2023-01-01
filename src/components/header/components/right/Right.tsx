import { Link } from 'react-router-dom';
import { Cart } from '../cart';

export function Right() {
	return (
		<>
			<div className='auth me-3'>Login/Logout</div>
			<Link to={'/cart'}>
				<Cart />
			</Link>
		</>
	);
}

export default Right;
