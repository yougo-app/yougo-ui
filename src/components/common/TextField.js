import {TextField} from '@material-ui/core';
import React from 'react';
import mapMuiProps from '../../util/wrap/redux-form/mapMuiProps';

export default ({defaultValue, ...props}) => <TextField {...mapMuiProps(props)} />;
