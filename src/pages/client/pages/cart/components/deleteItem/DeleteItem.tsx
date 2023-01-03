import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from 'src/hooks';
import { remove as removeFromCart } from 'src/state/cart';

export function DeleteItem({ productId }: { productId: string }) {
	const dispatch = useAppDispatch();

	return (
		<Button variant='danger' onClick={() => dispatch(removeFromCart(productId))}>
			<FontAwesomeIcon icon={solid('trash')} />
		</Button>
	);
}

export default DeleteItem;
