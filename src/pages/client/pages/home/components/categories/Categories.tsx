import useAxios from 'axios-hooks';
import { conf } from 'src/conf';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Category as ICategory } from './common';
import { Category } from './components';

export function Categories() {
	const [{ data, error, loading }] = useAxios<ICategory[], string>({
		baseURL: conf.api,
		url: 'categories',
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something went wrong...</p>;

	if (data)
		return (
			<>
				<Swiper slidesPerView={4.2} spaceBetween={24}>
					{data.map((category) => (
						<SwiperSlide key={category.id}>
							<Category category={category} key={category.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</>
		);

	return <p>Something went wrong, none executed</p>;
}

export default Categories;
