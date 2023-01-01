import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../../../hooks';
import { selectCart } from '../../../../state/cart';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import style from './Cart.module.scss';

export function Cart() {
	const cart = useAppSelector(selectCart);

	return (
		<>
			<FontAwesomeIcon icon={solid('cart-arrow-down')} />
		</>
	);
}

export default Cart;
