import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import getBookmarks from '../../actions/getBookmarks';
import Application from './Application';

const mapDispatchToProps = dispatch => ({...bindActionCreators({load: getBookmarks}, dispatch)});

export default connect(
	null,
	mapDispatchToProps,
)(Application);
