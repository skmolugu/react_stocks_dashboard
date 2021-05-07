import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {fetchPortfolio} from '../store/actions';

function ListPortfolio(props) {
	useEffect(() => {
		props.dispatch(fetchPortfolio());
	}, []);
	return (
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Portfolio Name</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((obj) => {
					return (
						<tr>
							<th scope="row">{obj.id}</th>
							<td>
								<span>{obj.name}</span>
							</td>
							<td>
								<button>Remove</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
const mapStateToProps = (state) => {
	return {
		data: state.portfolio || []
	}
}
export default connect(mapStateToProps)(ListPortfolio)