import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchPortfolio } from '../store/actions';
import { connect } from 'react-redux';

function ViewShares(props) {
	let [shares, setShares] = useState([]);
	function displayShares(event) {
		let selectedPortfolio = props.data.find(function (obj) {
			return obj.id === event.target.value
		});
		let shares = selectedPortfolio && selectedPortfolio.shares || [];
		setShares(shares);
	}

	useEffect(() => {
		props.dispatch(fetchPortfolio());
	}, []);
	return (
		<div className="card cust-card">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="portfolioName">Select Portfolio:</label>
						<select className="form-control" id="portfolioName" onChange={displayShares}>
							<option>--Select--</option>
							{props.data.map((obj) => {
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
const mapStateToProps = (state) => {
	return {
		data: state.portfolio
	}
}
export default connect(mapStateToProps)(ViewShares);