import { useAppSelector } from 'src/hooks';
import { cartSelect } from 'src/state/cart';
import { AddToCart, ManageQuantity } from './components';

export function AddToCartButton({
	productId,
	className = '',
}: {
	productId: string;
	className?: { [key: string]: string } | string;
}) {
	const cart = useAppSelector(cartSelect);

	const inCart: boolean = cart.products.findIndex((product) => product.id === productId) > -1;

	return (
		<div className={className + ' d-grid gap-2'}>
			{inCart ? (
				<ManageQuantity productId={productId.toString()} />
			) : (
				<AddToCart productId={productId} />
			)}
		</div>
	);
}

export default AddToCartButton;
