import {connect} from 'react-redux';
import getGos from '../../selectors/getGos';
import Body from './Body';

const mapStateToProps = state => ({
	gos: getGos(state),
});

export default connect(mapStateToProps)(Body);
