import { Footer, Header, LazyLoading } from 'src/components';

function Client() {
	return (
		<>
			<Header />
			<main id='main' className='main'>
				<LazyLoading />
			</main>
			<Footer />
		</>
	);
}

export default Client;
