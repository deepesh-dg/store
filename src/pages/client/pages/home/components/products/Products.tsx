import useAxios from 'axios-hooks';
import { Col, Row } from 'react-bootstrap';
import { Product as IProduct } from 'src/common';
import { Product } from 'src/components';
import { conf } from 'src/conf';

export function Products() {
	const [{ data, error, loading }] = useAxios<IProduct[], { message: string }>({
		baseURL: conf.api,
		url: 'products?offset=0&limit=18',
	});

	return (
		<>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>{error.response?.data.message}</p> : null}
			{data ? (
				<Row className='g-4'>
					{data.map((product) => (
						<Col key={product.id} xs={6} md={4}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			) : null}
		</>
	);
}

export default Products;
