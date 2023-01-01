import { FormEvent, useId } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Auth.module.scss';

type Props = {
	type: 'login' | 'signup';
	login?: (credentials: { email: string; password: string }) => void;
	signup?: (data: { name: string; email: string; password: string }) => void;
	error?: string;
};

function Auth(props: Props) {
	const heading = props.type === 'signup' ? 'Sign Up' : 'Sign In';
	const footerText = props.type === 'signup' ? 'Already have account?' : 'New to Amazon?';
	const btn = {
		text: props.type === 'signup' ? 'Sign In' : 'Create your Amazon account',
		url: props.type === 'signup' ? '/auth/login' : '/auth/signup',
		style: {
			textDecoration: 'none',
		},
	};

	const nameId = useId();
	const emailId = useId();
	const passwordId = useId();

	let name: any;
	let email: any;
	let password: any;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (props.type === 'login' && props.login)
			props.login({ email: email.value, password: password.value });
		else if (props.type === 'signup' && props.signup)
			props.signup({ name: name.value, email: email.value, password: password.value });
	};

	return (
		<>
			<h1 className={style.h1}>{heading}</h1>
			{props.error ? (
				<div className='text-danger text-center border py-2 px-3 mb-3'>{props.error}</div>
			) : null}
			<Form className='mb-4' onSubmit={handleSubmit}>
				{props.type === 'signup' ? (
					<Form.Group className='mb-3' controlId={'name' + nameId}>
						<Form.Label>
							<strong>Name</strong>
						</Form.Label>
						<Form.Control
							type='text'
							ref={(ref: any) => (name = ref)}
							autoComplete='name'
							required
						/>
					</Form.Group>
				) : null}

				<Form.Group className='mb-3' controlId={'email' + emailId}>
					<Form.Label>
						<strong>Email Address</strong>
					</Form.Label>
					<Form.Control
						type='email'
						ref={(ref: any) => (email = ref)}
						autoComplete='email'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId={'password' + passwordId}>
					<Form.Label>
						<strong>Password</strong>
					</Form.Label>
					<Form.Control
						type='password'
						ref={(ref: any) => (password = ref)}
						autoComplete='current-password'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<div className='d-grid gap-2'>
						<Button variant='primary' type='submit'>
							Continue
						</Button>
					</div>
				</Form.Group>
				<Form.Group className='text-center'>
					<Form.Text>
						By continuing, you agree to Amazon's{' '}
						<Link to={'/conditions-of-use'}>Conditions of Use</Link> and{' '}
						<Link to={'/privacy-notice'}>Privacy Notice</Link>.
					</Form.Text>
				</Form.Group>
			</Form>
			<div className={style.footer + ' mb-3'}>
				<span className={style.text}>
					<small className='form-text'>{footerText}</small>
				</span>
			</div>
			<Link to={btn.url} style={btn.style}>
				<div className='d-grid gap-2'>
					<Button variant='dark'>{btn.text}</Button>
				</div>
			</Link>
		</>
	);
}

export default Auth;
