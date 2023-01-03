import { Button } from 'react-bootstrap';
import { useAppDispatch } from 'src/hooks';
import { add as addToCart } from 'src/state/cart';
import style from './AddToCart.module.scss';

export function AddToCart({ productId }: { productId: string }) {
	const dispatch = useAppDispatch();
	return (
		<Button
			variant='tertiary'
			className={style.btn}
			onClick={() => dispatch(addToCart({ id: productId, quantity: 1 }))}
		>
			Add To Cart
		</Button>
	);
}

export default AddToCart;
