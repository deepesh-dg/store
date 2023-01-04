import { Container, Image } from 'react-bootstrap';
import style from './Footer.module.scss';
import logo from 'src/assets/images/logo.png';
import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer className={style.footer} id='footer'>
			<Container>
				<Link to={'/'}>
					<Image src={logo} alt='Logo' className='img-fluid' />
				</Link>
				<p className='my-2'>An Open-Source Project</p>
				<p className='my-2'>
					Developed By&nbsp;
					<a
						href='http://deepeshdg.com'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: 'var(--dg-tertiary)' }}
					>
						Deepesh Gupta
					</a>
				</p>
				<p className='mt-2'>
					<a
						href='http://github.com/deepesh-dg/store'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: 'var(--dg-tertiary)' }}
					>
						Check out the Source Code on Github
					</a>
				</p>
			</Container>
		</footer>
	);
}

export default Footer;
