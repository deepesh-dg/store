import { Nav, Navbar } from 'react-bootstrap';
import { SearchForm } from '../searchForm';

export function Middle() {
	return (
		<>
			<Navbar.Toggle aria-controls='main-header-navbar' className='text-light' />
			<Navbar.Collapse id='main-header-navbar'>
				<Nav className='px-lg-3 mt-2 mt-lg-0 pb-2 pb-lg-0 w-100'>
					<SearchForm />
				</Nav>
			</Navbar.Collapse>
		</>
	);
}

export default Middle;
