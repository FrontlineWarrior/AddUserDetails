import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTable from './tables/UserTable';

const App = () => {
	// Data
	const usersData = [
		{
			id: 1,
			name: 'Ghanshyam',
			address: 'Pune',
			phone: '9999999999',
			gender: 'Male',
			designation: 'Lead',
			email: 'test@test.com',
			notes: 'This is simple note'
		}
	];

	// Setting state
	const [users, setUsers] = useState(usersData);

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	return (
		<div className="container">
			<h1>Add User Details</h1>
			<div className="row">
				<div className="col-md-4">
					<Fragment>
						<h2>Add user</h2>
						<AddUserForm addUser={addUser} />
					</Fragment>
				</div>
				<div className="col-md-8">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
			</div>
		</div>
	);
};

export default App;
