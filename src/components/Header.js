import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './header.scss';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div>
        <h2 className={styles.h2}>Conway's Game of Life</h2>
      </div>
    );
  }
}
