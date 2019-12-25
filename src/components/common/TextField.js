import {TextField as MuiTextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import mapMuiProps from 'util/wrap/redux-form/mapMuiProps';

const TextField = ({defaultValue, ...props}) => <MuiTextField {...mapMuiProps(props)} />;

TextField.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types,react/require-default-props
	defaultValue: PropTypes.any,
};

export default TextField;
