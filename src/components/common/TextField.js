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
	rules: PropTypes.object,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onChangeName: PropTypes.string,
	onBlurName: PropTypes.string,
};

TextField.defaultProps = {
	rules: {},
};

export default TextField;
