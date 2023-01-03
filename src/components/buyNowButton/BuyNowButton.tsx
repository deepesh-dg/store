import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks';
import { add as addToCart } from 'src/state/cart';
import style from './BuyNowButton.module.scss';

export function BuyNowButton({
	productId,
	className = '',
}: {
	productId: string;
	className?: { [key: string]: string } | string;
}) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleBtn = () => {
		dispatch(addToCart({ id: productId, quantity: 1 }));
		navigate('/checkout');
	};

	return (
		<div className={className + ' d-grid gap-2'}>
			<Button variant='primary' className={style.btn} onClick={handleBtn}>
				Buy Now
			</Button>
		</div>
	);
}

export default BuyNowButton;
