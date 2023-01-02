import { Container, Image } from 'react-bootstrap';
import style from './Footer.module.scss';
import logo from 'src/assets/images/amazon-white.png';

export function Footer() {
	return (
		<footer className={style.footer} id='footer'>
			<Container>
				<Image src={logo} alt='Amazon Logo' className='img-fluid' />
				<p className='my-2'>An Open-Source Project</p>
				<p className='my-2'>
					Developed By&nbsp;
					<a href='http://deepeshdg.com' target='_blank' rel='noopener noreferrer'>
						Deepesh Gupta
					</a>
				</p>
				<p className='mt-2'>
					<a href='http://github.com/deepesh-dg/amazon' target='_blank' rel='noopener noreferrer'>
						Check out the Source Code on Github
					</a>
				</p>
			</Container>
		</footer>
	);
}

export default Footer;
