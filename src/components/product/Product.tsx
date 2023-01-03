import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { AddToCartButton, BuyNowButton } from '..';
import style from './Product.module.scss';

export function Product({ product }: { product: IProduct }) {
	return (
		<div className={style.product}>
			<div className={style.image}>
				<Link to={'/product/' + product.id}>
					<Image src={product.images[0]} alt={product.title} className='img-fluid' />
				</Link>
			</div>
			<div className={style.content}>
				<Link to={'/product/' + product.id} style={{ textDecoration: 'none' }}>
					<h6 className={style.title} title={product.title}>
						{product.title}
					</h6>
				</Link>
				{/* <p className={style.description} title={product.description}>
					{product.description}
				</p> */}
				<p className={style.price}>
					<sup>₹</sup>
					{product.price.toFixed(2)}
				</p>
				<AddToCartButton productId={product.id.toString()} className='mb-2' />
				<BuyNowButton productId={product.id.toString()} />
			</div>
		</div>
	);
}

export default Product;
