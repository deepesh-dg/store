import { Link } from 'react-router-dom';
import { Cart } from '../cart';
import { Profile } from '../profile';

export function Right() {
	return (
		<>
			<div className='auth me-3'>
				<Profile />
			</div>
			<Link to={'/cart'} style={{ color: 'var(--dg-white)' }}>
				<Cart />
			</Link>
		</>
	);
}

export default Right;
