import { connect } from 'react-redux';
import Timer from './presenter';
import { mapStateToProps, mapDispatchToProps } from './mapStateToProps';

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
