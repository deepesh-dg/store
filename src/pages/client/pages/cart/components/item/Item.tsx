import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { AddToCartButton } from 'src/components';
import { DeleteItem } from '..';
import style from './Item.module.scss';

export function Item({ product }: { product: IProduct }) {
	return (
		<Row className='g-3'>
			<Col xs={12} sm={3}>
				<Link to={'/product/' + product.id}>
					<Image src={product.images[0]} alt={product.title} className='img-fluid' />
				</Link>
			</Col>
			<Col xs={12} sm={7}>
				<div className={style.content}>
					<Link to={'/product/' + product.id}>
						<h6 className={style.title}>{product.title}</h6>
					</Link>
					<div className='d-flex justify-content-between'>
						<div style={{ width: '150px' }}>
							<AddToCartButton productId={product.id.toString()} />
						</div>
					</div>
				</div>
			</Col>
			<Col xs={12} sm={2}>
				<div className='d-flex flex-sm-wrap h-100 justify-content-sm-end align-items-center align-content-sm-between'>
					<div className='fw-bold d-flex justify-content-sm-end align-items-sm-center w-100'>
						<small>₹</small>
						<span className={style.price}>{product.price.toFixed(2)}</span>
					</div>
					<DeleteItem productId={product.id.toString()} />
				</div>
			</Col>
		</Row>
	);
}

export default Item;
