import getGos from 'actions/requests/getGos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Application from './Application';

const mapDispatchToProps = dispatch => ({...bindActionCreators({load: getGos}, dispatch)});

export default connect(null, mapDispatchToProps)(Application);
