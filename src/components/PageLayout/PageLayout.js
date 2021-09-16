import {Container} from '@mui/material';
import {makeStyles} from '@mui/styles';
import classNames from 'classnames';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'min-content auto',
		gridTemplateAreas: "'header' 'content'",
	},
	header: {
		gridArea: 'header',
	},
	content: {
		padding: theme.spacing(3),
		gridArea: 'content',
	},
}));

const PageLayout = ({children, className, ...other}) => {
	const classes = useStyles();
	return (
		<div className={classNames(classes.root, className)} {...other}>
			<Header className={classes.header} />
			<Container component="main" className={classes.content} fixed>
				{children}
			</Container>
		</div>
	);
};

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

PageLayout.defaultProps = {
	className: undefined,
};

export default PageLayout;
