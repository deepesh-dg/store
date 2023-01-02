import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Sliders.module.scss';

export function Sliders() {
	const sliders: string[] = [
		'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/610itsE9fJL._SX3000_.jpg',
		'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cQMXCLSvL._SX3000_.jpg',
		'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51DWgNo1fdL._SX3000_.jpg',
		'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61WE+jHT+QL._SX3000_.jpg',
		'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81ktw-jnzkL._SX3000_.jpg',
		'https://m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png',
	];
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			navigation
			modules={[Navigation]}
			loop
			autoplay
			className={style.swiper}
		>
			{sliders.map((slider, index) => (
				<SwiperSlide key={index + 1}>
					<img className='d-block w-100' src={slider} alt={slider} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Sliders;
