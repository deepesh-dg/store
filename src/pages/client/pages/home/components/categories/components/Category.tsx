import style from './Category.module.scss';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Category as ICategory } from '../common';

export function Category({ category }: { category: ICategory }) {
	return (
		<Link to={'/category/' + category.id}>
			<div className={style.category}>
				<div className='image'>
					<Image src={category.image} alt={category.name} className='img-fluid' />
				</div>
				<p className='mt-2'>{category.name}</p>
			</div>
		</Link>
	);
}

export default Category;
