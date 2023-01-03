import { Button } from 'react-bootstrap';
import { useAppDispatch } from 'src/hooks';
import { empty } from 'src/state/cart';

export function EmptyCart() {
	const dispatch = useAppDispatch();

	const emptyCart = () => {
		dispatch(empty());
	};

	return (
		<Button variant='danger' onClick={emptyCart}>
			Empty
		</Button>
	);
}

export default EmptyCart;
