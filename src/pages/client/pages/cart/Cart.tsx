import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Product as IProduct } from 'src/common';
import { conf } from 'src/conf';
import { useAppSelector } from 'src/hooks';
import { cartSelect } from 'src/state/cart';
import style from './Cart.module.scss';
import { EmptyCart, Item } from './components';

function Cart() {
	const cart = useAppSelector(cartSelect);
	const [products, setProducts] = useState<IProduct[]>([]);
	const subTotalAmount = products
		.map<number>((product) => {
			const cartProduct = cart.products.filter((p) => product.id.toString() === p.id)[0];

			const quantity = cartProduct ? cartProduct.quantity : 0;
			const price = product.price;

			return price * quantity;
		})
		.reduce((prev, next) => prev + next, 0)
		.toFixed(2);

	useEffect(() => {
		const getProducts = async () => {
			const promises: Promise<AxiosResponse<IProduct, any>>[] = [];

			cart.products.forEach((product) => {
				promises.push(axios.get<IProduct>('products/' + product.id, { baseURL: conf.api }));
			});

			try {
				setProducts((await Promise.all(promises)).map((res) => res.data));
			} catch (e) {}
		};

		getProducts();
	}, [cart]);

	return (
		<div className='bgLightDark'>
			<Container className={style.container}>
				<Row className='g-3'>
					<Col xs={12} lg={8} xxl={9}>
						<div className={style.box}>
							<div className='d-flex justify-content-between'>
								<h1 className='mb-0'>Shopping Cart</h1>
								<span>
									<EmptyCart />
								</span>
							</div>
							<hr />
							{products.map((product) => (
								<div className='item' key={product.id}>
									<Item product={product} />
									<hr />
								</div>
							))}
							<div className='text-end' style={{ fontSize: '125%' }}>
								Subtotal ({cart.total} {cart.total > 1 ? 'items' : 'item'}):&nbsp;
								<span className='fw-bold d-inline-flex justify-content-end align-items-center'>
									<small style={{ fontSize: '70%' }}>₹</small>
									{subTotalAmount}
								</span>
							</div>
						</div>
					</Col>
					<Col xs={12} lg={4} xxl={3}>
						<div className={style.box}>
							<div style={{ fontSize: '125%' }} className='mb-3'>
								Subtotal ({cart.total} {cart.total > 1 ? 'items' : 'item'}):&nbsp;
								<span className='fw-bold d-inline-flex justify-content-end align-items-center'>
									<small style={{ fontSize: '70%' }}>₹</small>
									{subTotalAmount}
								</span>
							</div>
							<div className='d-grid gap-2'>
								<Button variant='tertiary'>Proceed to Buy</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Cart;
