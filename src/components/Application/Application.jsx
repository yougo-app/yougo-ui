import PropTypes from 'prop-types';
import React from 'react';
import Body from '../Body';
import Header from '../Header';
import Global from '../Global';

class Application extends React.Component {
	componentDidMount() {
		const {load} = this.props;
		load();
	}

	render() {
		return (
			<div className="layout">
				<Header className="header" />
				<div className="sidebar" />
				<Body className="content" />
				<Global />
			</div>
		);
	}
}

Application.propTypes = {
	load: PropTypes.func.isRequired,
};

export default Application;
