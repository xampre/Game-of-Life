import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import Matrix from './Matrix';
import Controller from './Controller';
import styles from './index.scss';

@connect()
@cssModules(styles)
class Root extends Component {
  static propTypes = {
    styles: PropTypes.object,
    store: PropTypes.object.isRequired
  };

  render() {
    const { styles, store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.controller}>
            <Controller />
          </div>
          <Matrix />
        </div>
      </Provider>
    );
  }
}

export default Root;
