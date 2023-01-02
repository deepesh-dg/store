import useAxios from 'axios-hooks';
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { conf } from 'src/conf';
import { useAppDispatch } from 'src/hooks';
import { add as addToCart } from 'src/state/cart';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Product.module.scss';

function Product() {
	const range = (n: number) => Array.from(Array(n).keys());

	const { productId } = useParams();
	const [{ data, error, loading }] = useAxios<IProduct, { message: string }>({
		baseURL: conf.api,
		url: 'products/' + productId,
	});

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	let quantityRef: HTMLSelectElement;

	const buyNow = () => {
		dispatch(addToCart({ id: data?.id.toString() || '', quantity: Number(quantityRef.value) }));
		navigate('/checkout');
	};

	return (
		<>
			<Container className={style.container}>
				{loading ? <p>Loading...</p> : null}
				{error ? <p>{error.response?.data.message}</p> : null}
				{data ? (
					<Row>
						<Col xs={12} md={5}>
							<Swiper
								slidesPerView={1}
								modules={[Navigation, Pagination]}
								navigation
								pagination={{ clickable: true }}
								autoplay
								loop
							>
								{data.images.map((image, index) => (
									<SwiperSlide key={index + 1}>
										<Image src={image} alt={data.title} className='img-fluid' />
									</SwiperSlide>
								))}
							</Swiper>
						</Col>
						<Col xs={12} md={4}>
							<h1 className={style.title}>{data.title}</h1>
							<hr />
							<p className={style.price}>
								<sup>₹</sup>
								{data.price}
							</p>
							<p>
								<small>Inclusive of all taxes</small>
							</p>
							<hr />
						</Col>
						<Col xs={12} md={3}>
							<div className={style.sideBox}>
								<p className={style.price + ' mb-2'}>
									<sup>₹</sup>
									{data.price}
									<sup>00</sup>
								</p>
								<p className={style.description + ' mb-2'}>{data.description}</p>
								<InputGroup className='mb-3'>
									<Form.Label style={{ display: 'flex', alignItems: 'center' }}>
										Quantity:&nbsp;
									</Form.Label>
									<Form.Select ref={(ref: any) => (quantityRef = ref)}>
										{range(10).map((num) => (
											<option value={num + 1} key={num + 1}>
												{num + 1}
											</option>
										))}
									</Form.Select>
								</InputGroup>

								<div className='d-grid gap-2 mb-2'>
									<Button
										variant='tertiary'
										className={style.btn}
										onClick={() =>
											dispatch(
												addToCart({
													id: data.id.toString(),
													quantity: Number(quantityRef.value),
												})
											)
										}
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
						</Col>
					</Row>
				) : null}
			</Container>
		</>
	);
}

export default Product;
