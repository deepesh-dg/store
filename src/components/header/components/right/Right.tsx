import { Cart } from '../cart';

export function Right() {
	return (
		<>
			<div className='auth me-3'>Login/Logout</div>
			<div className='cart'>
				<Cart />
			</div>
		</>
	);
}

export default Right;
