import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { cartSelect, changeQuantity } from 'src/state/cart';
import style from './ManageQuantity.module.scss';

export function ManageQuantity({ productId }: { productId: string }) {
	const cart = useAppSelector(cartSelect);
	const dispatch = useAppDispatch();
	const { quantity } = cart.products.filter((product) => product.id === productId)[0];

	return (
		<div className={style.main}>
			<Button
				variant='tertiary'
				onClick={() => dispatch(changeQuantity({ id: productId, quantity: quantity - 1 }))}
			>
				-
			</Button>
			<div className='mx-3'>{quantity}</div>
			<Button
				variant='tertiary'
				onClick={() => dispatch(changeQuantity({ id: productId, quantity: quantity + 1 }))}
			>
				+
			</Button>
		</div>
	);
}

export default ManageQuantity;
