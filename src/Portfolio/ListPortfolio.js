import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ListPortfolio() {
	let [data, setData] = useState([]);
	function removePortfolio() {
		console.log('remove action triggered')
	}
	useEffect(() => {
		axios.get('/list').then(function (response) {
			setData(response.data);
		});
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
				{data.map((obj) => {
					return (
						<tr>
							<th scope="row">{obj.id}</th>
							<td>
								<span>{obj.name}</span>
							</td>
							<td>
								<button onClick={removePortfolio}>Remove</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}