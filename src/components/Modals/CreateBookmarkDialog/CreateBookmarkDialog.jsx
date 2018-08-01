import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import ReduxFormDialog from '../../common/ReduxFormDialog';

const styles = {
	root: {},
};

const CreateBookmarkDialog = ({classes, className, ...other}) => (
	<ReduxFormDialog
		title="Add a bookmark"
		className={classNames(classes.root, className)}
		{...other}
	>
		<div>
			<Field component={TextField} name="alias" label="Alias" placeholder="google" />
		</div>
		<div>
			<Field
				component={TextField}
				name="href"
				label="Href"
				placeholder="http://www.google.com.au"
			/>
		</div>
	</ReduxFormDialog>
);

CreateBookmarkDialog.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default withStyles(styles)(CreateBookmarkDialog);
