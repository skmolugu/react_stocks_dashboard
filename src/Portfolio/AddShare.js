import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddShare() {
	let [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		axios.get('/list').then(function (response) {
			setPortfolio(response.data);
		});
	}, []);
	return (
		<div className="card cust-card">
			<div className="col-md-12">
			<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="portfolioName">Select Portfolio:</label>
						<select className="form-control" id="portfolioName">
							{portfolio.map((obj) => {
								return <option value={obj.id}>{obj.name}</option>
							})}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="shareName">Enter Share Name:</label>
						<input type="text" className="form-control" id="shareName" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="quantity">Quantity:</label>
						<input type="text" className="form-control" id="quantity" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="currentPrice">Current Market Price:</label>
						<input type="text" className="form-control" id="currentPrice" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="exchange">Stock Exchange:</label>
						<input type="text" className="form-control" id="exchange" />
					</div>
				</div>
			</div>
			<button className="col-md-3 mar-l-1 btn btn-primary btn-lg btn-block"  type="submit">Create</button>
		</div>
	)
}