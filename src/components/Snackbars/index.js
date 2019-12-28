import removeSnackbar from 'actions/ui/removeSnackbar';
import {withSnackbar} from 'notistack';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getSnackbars from 'selectors/getSnackbars';
import Snackbars from './Snackbars';

const mapStateToProps = state => ({
	snackbars: getSnackbars(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({removeSnackbar}, dispatch);

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Snackbars));
