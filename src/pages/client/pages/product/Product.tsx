import useAxios from 'axios-hooks';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { AddToCartButton, BuyNowButton } from 'src/components';
import { conf } from 'src/conf';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Product.module.scss';

function Product() {
	const { productId } = useParams();
	const [{ data, error, loading }] = useAxios<IProduct, { message: string }>({
		baseURL: conf.api,
		url: 'products/' + productId,
	});

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
								{data.price.toFixed(2)}
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
									{data.price.toFixed(2)}
								</p>
								<p className='mb-3'>{data.description}</p>

								<AddToCartButton productId={data.id.toString()} className='mb-2' />
								<BuyNowButton productId={data.id.toString()} />
							</div>
						</Col>
					</Row>
				) : null}
			</Container>
		</>
	);
}

export default Product;
