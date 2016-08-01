import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MatrixActions from '../actions/matrix';
import Matrix from '../components/Matrix';

const mapStateToProps = (state) => ({
  matrix: state.game.matrix,
  isPlaying: state.game.isPlaying
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MatrixActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);
