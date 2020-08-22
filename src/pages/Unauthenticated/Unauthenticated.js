import {Typography} from '@material-ui/core';
import EmptyState from 'components/EmptyState';
import {useAuth} from 'oidc-react/build/src';
import PropTypes from 'prop-types';
import React from 'react';
// see: https://github.com/prescottprue/react-google-button/issues/28
import GoogleButton from 'react-google-button/dist/react-google-button';

const Unauthenticated = ({className, ...other}) => {
	const {signIn} = useAuth();
	return (
		<EmptyState className={className} {...other}>
			<Typography variant="h1" color="textPrimary">
				Yougo
			</Typography>
			<Typography color="textSecondary">Please sign in to use this site</Typography>
			<GoogleButton type="light" onClick={signIn} />
		</EmptyState>
	);
};

Unauthenticated.propTypes = {
	className: PropTypes.string,
};

Unauthenticated.defaultProps = {
	className: undefined,
};

export default Unauthenticated;
