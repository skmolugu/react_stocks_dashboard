import axios from 'axios';

export const fetchPortfolio = () => {
	return (dispatch) => {
		axios.get('/list').then(function (response) {
			dispatch({
				type: 'FETCH_PORTFOLIO',
				payload: response.data
			})
		});
	}
}

export const createPortfolio = (name, history) => {
	return (dispatch) => {
		axios.post('/create', { name: name }).then(function (response, err) {
			dispatch({
				type: 'CREATE_PORTFOLIO',
				payload: response.data
			})
			history.push('view-portfolio');
		});
	}
}

export const addShare = (data, history) => {
	return (dispatch) => {
		axios.post('/add-share', data).then(function (response, err) {
			history.push('shares');
		});
	}
}