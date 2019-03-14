import React from 'react';

const UserTable = props => (
	<div className="panel panel-default">
		<div className="panel-body">
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Gender</th>
						<th>Designation</th>
						<th>Address</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{props.users.length > 0 ? (
						props.users.map(user => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.gender}</td>
								<td>{user.designation}</td>
								<td>{user.address}</td>
								<td>{user.notes}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={7}>No users</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</div>
);

export default UserTable;
