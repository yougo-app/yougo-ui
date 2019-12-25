import Body from 'components/Body';
import Global from 'components/Global';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import React from 'react';

class Application extends React.Component {
	componentDidMount() {
		const {load} = this.props;
		load();
	}

	render() {
		return (
			<div className="layout">
				<Header className="header" />
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
