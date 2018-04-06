/* eslint-disable react/prop-types */
import {withStyles} from 'material-ui';
import React from 'react';
import {Field} from 'redux-form';
import {TextField} from '../../form/index';
import ReduxFormDialog from '../../form/ReduxFormDialog';


const styles = {
	root: {},
	fields: {},
	alias: {},
	href: {},
	description: {},
};

const CreateBookmarkDialog = ({
	classes, actions, formProps, ...other
}) => (
	<div className={classes.root}>
		<ReduxFormDialog
			title="Add a bookmark"
			{...actions}
			{...other}
		>
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
				<div>
					<Field
						className={classes.description}
						component={TextField}
						name="desc"
						label="Description"
						placeholder="Google"
					/>
				</div>
			</div>
		</ReduxFormDialog>
	</div>
);

export default withStyles(styles)(CreateBookmarkDialog);
