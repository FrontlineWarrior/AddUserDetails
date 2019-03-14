import React, { useState } from 'react';

const AddUserForm = props => {
	const initialFormState = {
		id: null,
		name: '',
		email: '',
		phone: '',
		gender: '',
		designation: '',
		address: '',
		notes: ''
	};

	const [user, setUser] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				if (!user.name || !user.address) return;

				props.addUser(user);
				setUser(initialFormState);
			}}
		>
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							name="name"
							className="form-control"
							value={user.name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emailAddress">Email Address</label>
						<input
							type="email"
							className="form-control"
							id="emailAddress"
							placeholder="Email"
							name="email"
							value={user.email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Phone</label>
						<input
							type="tel"
							className="form-control"
							id="phoneNumber"
							placeholder="Add phone number"
							name="phone"
							value={user.phone}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Gender: &nbsp;</label>
						<label className="radio-inline">
							<input
								type="radio"
								name="gender"
								value="Male"
								onChange={handleInputChange}
							/>
							Male
						</label>
						<label className="radio-inline">
							<input
								type="radio"
								name="gender"
								value="Female"
								onChange={handleInputChange}
							/>
							Female
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="selectDesignation">
							Select Designation
						</label>
						<select
							id="selectDesignation"
							name="designation"
							value={user.designation}
							className="form-control"
							onChange={handleInputChange}
						>
							<option>Select Designation</option>
							<option>Manager</option>
							<option>Lead</option>
							<option>Software Engineer</option>
						</select>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							name="address"
							value={user.address}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="notes">Add notes</label>
						<textarea
							id="notes"
							className="form-control"
							rows="3"
							name="notes"
							value={user.notes}
							onChange={handleInputChange}
						/>
					</div>

					<button className="btn btn-primary">Add new user</button>
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
