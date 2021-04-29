import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePortfolio() {
	let [name,setName] = useState('');
	function apiCall() {
		axios.post('/create',{name:name}).then(function(response,err) {
			console.log('called');
			setName("");
		});
	}
	let updateName = (event) => {
		setName(event.target.value);
	}
	return (
		<div className="card cust-card">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="portfolioName">Enter Portfolio Name:</label>
						<input type="text" className="form-control" value={name} id="portfolioName" onChange={updateName} />
					</div>
				</div>
			</div>
			<button className="col-md-3 mar-l-1 btn btn-primary btn-lg btn-block" onClick={apiCall} type="submit">Create</button>
		</div>
	)
}