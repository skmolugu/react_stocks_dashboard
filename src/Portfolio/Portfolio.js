import React from 'react';
import './portfolio.css';

export default class Portfolio extends React.Component {

	state = {
		addshares: []
	}

	copytoStat = () => {
		this.state.addshares = this.props.sharescollection.slice();
	}

	currentPrice = (name, event) => {
		let newvalue = event.target.value;
		this.props.currentPrice(name, newvalue);
	}

	render() {
		var sq = this.copytoStat();
		return (
			<div>
				{sq}
				<table>
					<tr>
						<th>Ticker</th>
						<th>Buy in Price</th>
						<th>Qunatity</th>
						<th>Buy in Total</th>
						<th>Exchange</th>
						<th>Current Market Price</th>
						<th>Current Total</th>
						<th>Returns</th>
						<th>Action</th>
					</tr>
					{this.state.addshares.map((x) => {
						return (<tr>
							<td>{x.name}</td>
							<td>{x.price}</td>
							<td>{x.qunatity}</td>
							<td>{x.price * x.qunatity}</td>
							<td>{x.exchangename}</td>
							<td>
								<input type="text" className="nav-current-market-price" placeholder="Current Market Price" onChange={(e) => this.currentPrice(x.name, e)}></input>
							</td>
							<td>
								{x.qunatity * x.currentstockprice}
							</td>
							<td>
								{(x.qunatity * x.currentstockprice) - (x.price * x.qunatity)}
							</td>
							<td>
								<input type="button" value="Remove" className="remove" onClick={() => this.props.onDelete(x.name)}></input>
							</td>
						</tr>)
					}
					)
					}
				</table>
			</div>
		)
	}
}