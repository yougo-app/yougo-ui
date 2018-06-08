/* eslint-disable react/prop-types */
import {withStyles} from 'material-ui';
import React from 'react';
import {Field} from 'redux-form';
import TextField from '../../common/TextField';
import ReduxFormDialog from '../../common/ReduxFormDialog';

const styles = {
	root: {},
	fields: {},
	alias: {},
	href: {},
	description: {},
};

const CreateBookmarkDialog = ({classes, formProps, ...other}) => (
	<div className={classes.root}>
		<ReduxFormDialog title="Add a bookmark" {...other}>
			<div className={classes.fields}>
				<div>
					<Field
						className={classes.alias}
						component={TextField}
						name="alias"
						label="Alias"
						placeholder="google"
					/>
				</div>
				<div>
					<Field
						className={classes.href}
						component={TextField}
						name="href"
						label="Href"
						placeholder="http://www.google.com.au"
					/>
				</div>
			</div>
		</ReduxFormDialog>
	</div>
);

export default withStyles(styles)(CreateBookmarkDialog);
