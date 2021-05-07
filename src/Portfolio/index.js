import React from 'react';
import { routes } from '../Router/Router';
import { fetchPortfolio } from '../store/actions';
import { connect } from 'react-redux';

class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPortfolio());
	}
	render() {
		return (
			<div>{routes}</div>
		)
	}
}


export default connect()(Home);