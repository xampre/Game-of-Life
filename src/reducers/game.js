import { createReducer } from 'redux-create-reducer';
import { NEXT, STOP, CLEAR, RANDOM_MATRIX } from '../actions/game';
import { CELL_CHANGED } from '../actions/matrix';
import { nextGenalation, rule as defaultRule } from '../lib/lifeGame';
import { randomBool, makeMatrix, toggledMatrix } from '../lib/utils';

const X_SIZE = 30;
const Y_SIZE = 30;
const initialState = {
  playingFrameID: 0,
  matrix: makeMatrix(X_SIZE, Y_SIZE, () => randomBool(0.2)),
  rule: defaultRule
};

export default createReducer(initialState, {
  [NEXT](state, { frameID }) {
    return {
      ...state,
      playingFrameID: frameID,
      matrix: nextGenalation(state.matrix, state.rule)
    };
  },
  [CELL_CHANGED](state, { x, y }) {
    return {
      ...state,
      matrix: toggledMatrix(state.matrix, x, y)
    };
  },
  [STOP](state) {
    return {
      ...state,
      playingFrameID: 0
    };
  },
  [CLEAR](state) {
    return {
      ...state,
      playingFrameID: 0,
      matrix: makeMatrix(X_SIZE, Y_SIZE)
    };
  },
  [RANDOM_MATRIX](state) {
    return {
      ...state,
      matrix: makeMatrix(X_SIZE, Y_SIZE, () => randomBool(0.2))
    };
  }
});
