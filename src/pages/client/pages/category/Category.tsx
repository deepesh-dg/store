import useAxios from 'axios-hooks';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Product as IProduct } from 'src/common';
import { Product } from 'src/components';
import { conf } from 'src/conf';

function Category() {
	const { categoryId } = useParams();
	const [{ data, error, loading }] = useAxios<IProduct[]>({
		baseURL: conf.api,
		url: 'categories/' + categoryId + '/products',
	});

	return (
		<div style={{ padding: '2.5rem 0rem' }}>
			<Container>
				{loading ? <p>Loading...</p> : null}
				{error ? <p>Something went wrong...</p> : null}
				{data ? (
					<Row className='g-2'>
						{data.map((product) => (
							<Col key={product.id} xs={6} md={4} xxl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				) : null}
			</Container>
		</div>
	);
}

export default Category;
