import { Container } from 'react-bootstrap';
import { Sliders, Categories, Products } from './components';
import style from './Home.module.scss';

function Home() {
	return (
		<>
			<Sliders></Sliders>
			<div className={style.bgOverlay}>
				<Container className={style.container}>
					<div className={style.categories}>
						<Categories />
					</div>
				</Container>
			</div>
			<Container className={style.container}>
				<Products />
			</Container>
		</>
	);
}

export default Home;
