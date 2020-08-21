import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import anylogger from 'anylogger';
import {Log} from 'oidc-client';
import PropTypes from 'prop-types';
import React from 'react';

const log = anylogger('auth');
Log.logger = log;

const UserProfileButton = ({user, onClick, ...props}) => (
	<IconButton color="inherit" onClick={onClick} {...props}>
		<Avatar imgProps={{referrerPolicy: 'no-referrer'}} src={user.picture[0]} />
	</IconButton>
);

UserProfileButton.propTypes = {
	user: PropTypes.shape({
		picture: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
	onClick: PropTypes.func,
};

UserProfileButton.defaultProps = {
	onClick: () => {},
};

export default UserProfileButton;
