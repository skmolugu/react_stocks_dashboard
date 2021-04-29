import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ListPortfolio() {
	let [data, setData] = useState([]);
	let [edit, setEdit] = useState(false);
	function updatePortfolioName() {
		setEdit(!edit);
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
								{!edit &&
									<span>{obj.name}</span>
								}
								{edit &&
									<input type="text" value={obj.name} />
								}
							</td>
							<td>
								{!edit &&
									<button onClick={updatePortfolioName}>EDIT</button>
								}
								{edit &&
									<React.Fragment>
										<button>Update</button>
										<button onClick={updatePortfolioName}>Cancel</button>
									</React.Fragment>
								}
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}