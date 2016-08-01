import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/game';
import Controller from '../components/Controller';

const mapStateToProps = (state) => ({
  playingFrameID: state.game.playingFrameID
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(GameActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
