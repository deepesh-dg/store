import useAxios from 'axios-hooks';
import { Container, Image, Table } from 'react-bootstrap';
import { conf } from 'src/conf';
import { User } from './common';

function Users() {
	const [{ data, error, loading }] = useAxios<User[]>({ baseURL: conf.api, url: 'users' });

	if (loading) return <div className='text-center'>Loading...</div>;
	if (error) return <div className='text-center'>Something Went Wrong</div>;
	if (data)
		return (
			<div className='py-5'>
				<Container>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>id</th>
								<th>Avatar</th>
								<th>Name</th>
								<th>Email</th>
								<th>Password</th>
							</tr>
						</thead>
						<tbody>
							{data.map((user) => {
								return (
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>
											<Image src={user.avatar} className='img-fluid' width={64} />
										</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.password}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	else return null;
}

export default Users;
