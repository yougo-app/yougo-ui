import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from 'components/common/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import {useFormContext} from 'react-hook-form';
import isGo from 'util/validators/isGo';
import isUrl from 'util/validators/isUrl';

const styles = {
	root: {},
};

const GoForm = ({classes, className, form, onSubmit, go, ...other}) => {
	const {handleSubmit} = useFormContext();
	return (
		<form
			id={form}
			className={classNames(classes.root, className)}
			onSubmit={handleSubmit(onSubmit)}
			{...other}
		>
			<TextField
				name="go"
				label="Go shortcut"
				placeholder="example"
				rules={{required: 'Required', validate: isGo}}
				defaultValue={go && go.go}
				autoFocus
			/>
			<TextField
				name="href"
				label="URL"
				placeholder="http://example.com"
				rules={{required: 'Required', validate: isUrl}}
				defaultValue={go && go.href}
			/>
		</form>
	);
};

GoForm.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/forbid-prop-types,react/require-default-props
	go: PropTypes.object,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	form: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(GoForm);
