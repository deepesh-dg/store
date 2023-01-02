import { Container } from 'react-bootstrap';
import { Sliders, Categories } from './components';
import style from './Home.module.scss';

function Home() {
	return (
		<>
			<Sliders></Sliders>
			<Container className={style.container}>
				<div className={style.categories}>
					<Categories />
				</div>
			</Container>
		</>
	);
}

export default Home;
