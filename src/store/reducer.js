const initialState = {
	portfolio: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_PORTFOLIO':
			return {
				portfolio: action.payload
			};
			default:
				return state;
	};
}

export default reducer;