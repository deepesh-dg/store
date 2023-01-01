import { FormEvent } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import style from './SearchForm.module.scss';

export function SearchForm() {
	const search = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<Form onSubmit={search} className={style.form}>
			<InputGroup>
				<Form.Control placeholder='Search Amazon' />
				<Button type='submit' variant='primary'>
					Search
				</Button>
			</InputGroup>
		</Form>
	);
}

export default SearchForm;
