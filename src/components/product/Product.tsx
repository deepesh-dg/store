import { Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { useAppDispatch } from 'src/hooks';
import { add as addToCart } from 'src/state/cart';
import style from './Product.module.scss';

export function Product({ product }: { product: IProduct }) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const buyNow = () => {
		dispatch(addToCart({ id: product.id.toString(), quantity: 1 }));
		navigate('/checkout');
	};

	return (
		<div className={style.product}>
			<div className={style.image}>
				<Link to={'/products/' + product.id}>
					<Image src={product.images[0]} alt={product.title} className='img-fluid' />
				</Link>
			</div>
			<div className={style.content}>
				<Link to={'/products/' + product.id} style={{ textDecoration: 'none' }}>
					<h6 className={style.title} title={product.title}>
						{product.title}
					</h6>
				</Link>
				<p className={style.description} title={product.description}>
					{product.description}
				</p>
				<p className={style.price}>
					<sup>₹</sup>
					{product.price}
				</p>
				<div className='d-grid gap-2 mb-2'>
					<Button
						variant='tertiary'
						className={style.btn}
						onClick={() => dispatch(addToCart({ id: product.id.toString(), quantity: 1 }))}
					>
						Add To Cart
					</Button>
				</div>
				<div className='d-grid gap-2'>
					<Button variant='primary' className={style.btn} onClick={buyNow}>
						Buy Now
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Product;
