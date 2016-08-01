import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import s from './Matrix.scss';

const liveColor = 'lime';
const dieColor = 'darkslategray';

const Matrix = ({ matrix, isPlaying, cellChanged, styles }) => (
  <table>
    <tbody> {
      matrix.map((row, y) => (
        <tr>{row.map((val, x) =>
          <th className={styles.cell}
            style={{ backgroundColor: val ? liveColor : dieColor }}
            onClick={() => isPlaying ? null : cellChanged(x, y)}
          >
          </th>)}
        </tr>))}
    </tbody>
  </table>
);

Matrix.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.array).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  cellChanged: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default cssModules(s)(Matrix);
