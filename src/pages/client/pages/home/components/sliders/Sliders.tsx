import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Sliders.module.scss';
import slider1 from 'src/assets/images/slider-1.jpg';
import slider2 from 'src/assets/images/slider-2.jpg';
import slider3 from 'src/assets/images/slider-3.jpg';

export function Sliders() {
	const sliders: string[] = [slider1, slider2, slider3];
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
