import {TextField as MuiTextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

const TextField = ({
	name,
	defaultValue,
	rules,
	onChange,
	onBlur,
	onChangeName,
	onBlurName,
	...props
}) => {
	const {control, errors} = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			defaultValue={defaultValue}
			onChange={onChange}
			onBlur={onBlur}
			onChangeName={onChangeName}
			onBlurName={onBlurName}
			as={
				<MuiTextField
					error={Boolean(errors[name])}
					helperText={errors[name] && errors[name].message}
					margin="dense"
					fullWidth
					{...props}
				/>
			}
		/>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	rules: PropTypes.object,
	// eslint-disable-next-line react/require-default-props
	defaultValue: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	onChange: PropTypes.func,
	// eslint-disable-next-line react/require-default-props
	onBlur: PropTypes.func,
	// eslint-disable-next-line react/require-default-props
	onChangeName: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	onBlurName: PropTypes.string,
};

TextField.defaultProps = {
	rules: {},
};

export default TextField;
