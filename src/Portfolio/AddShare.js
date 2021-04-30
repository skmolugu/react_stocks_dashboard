import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

function AddShare(props) {
	console.log('add share called');
	let [portfolio, setPortfolio] = useState([]);
	let [selectedPortfolio, setSelectedPortfolio] = useState([]);
	let [name, setName] = useState();
	let [quantity, setQuantity] = useState();
	let [currentPrice, setCurrentPrice] = useState();
	let [exchange, setExchange] = useState();
	
	function updatePortfolio(event) {
		setSelectedPortfolio(event.target.value);
	}
	function updateShareName(event) {
		setName(event.target.value);
	}
	function updateQuantity(event) {
		setQuantity(event.target.value);
	}
	function updateCurrentPrice(event) {
		setCurrentPrice(event.target.value);
	}
	function updateExchange(event) {
		setExchange(event.target.value);
	}
	function addShare() {
		axios.post('/add-share', { id: selectedPortfolio, name, quantity, currentPrice, exchange }).then(function (response, err) {
			props.history.push('view-shares');
		});
	}
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
						<select className="form-control" id="portfolioName" onChange={updatePortfolio}>
							<option>--Select--</option>
							{portfolio.map((obj) => {
								return <option value={obj.id}>{obj.name}</option>
							})}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="shareName">Enter Share Name:</label>
						<input type="text" value={name} onChange={updateShareName} className="form-control" id="shareName" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="quantity">Quantity:</label>
						<input type="text" className="form-control" value={quantity} onChange={updateQuantity} id="quantity" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="currentPrice">Current Market Price:</label>
						<input type="text" className="form-control" value={currentPrice} onChange={updateCurrentPrice} id="currentPrice" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mb-3">
						<label htmlFor="exchange">Stock Exchange:</label>
						<input type="text" className="form-control" value={exchange} onChange={updateExchange} id="exchange" />
					</div>
				</div>
			</div>
			<button className="col-md-3 mar-l-1 btn btn-primary btn-lg btn-block" onClick={addShare} type="submit">Create</button>
		</div>
	)
}

export default withRouter(AddShare);