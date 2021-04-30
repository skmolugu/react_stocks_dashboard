import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ViewShares() {
	let [data, setData] = useState([]);
	let [shares, setShares] = useState([]);
	function displayShares(event) {
		let selectedPortfolio = data.find(function (obj) {
			return obj.id === event.target.value
		});
		let shares = selectedPortfolio && selectedPortfolio.shares || [];
		setShares(shares);
	}

	useEffect(() => {
		axios.get('/shares').then(function (response) {
			setData(response.data);
		});
	}, []);
	return (
		<div className="card cust-card">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="portfolioName">Select Portfolio:</label>
						<select className="form-control" id="portfolioName" onChange={displayShares}>
							<option>--Select--</option>
							{data.map((obj) => {
								return <option value={obj.id}>{obj.name}</option>
							})}
						</select>
					</div>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Stock Name</th>
							<th scope="col">Quantity</th>
							<th scope="col">Exchange</th>
						</tr>
					</thead>
					<tbody>
						{shares.map((obj) => {
							return (
								<tr>
									<th scope="row">{obj.name}</th>
									<td>
										<span>{obj.quantity}</span>
									</td>
									<td>
										<span>{obj.exchange}</span>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}