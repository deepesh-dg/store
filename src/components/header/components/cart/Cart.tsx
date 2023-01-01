import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'src/hooks';
import { cartSelect } from 'src/state/cart';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import style from './Cart.module.scss';

export function Cart() {
	const cart = useAppSelector(cartSelect);

	return (
		<div className={style.cart}>
			<div className={style.cartTotal}>
				<span className={style.total}>{cart.total}</span>
			</div>
			<div className={style.icon}>
				<FontAwesomeIcon icon={solid('cart-plus')} />
			</div>
		</div>
	);
}

export default Cart;
