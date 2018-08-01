import {connect} from 'react-redux';
import getAliases from '../../selectors/getAliases';
import Body from './Body';

const mapStateToProps = state => ({
	aliases: getAliases(state),
});

export default connect(mapStateToProps)(Body);
