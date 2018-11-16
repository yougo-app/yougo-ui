import {connect} from 'react-redux';
import getFilteredGos from '../../selectors/getFilteredGos';
import Body from './Body';

const mapStateToProps = state => ({
	gos: getFilteredGos(state),
});

export default connect(mapStateToProps)(Body);
