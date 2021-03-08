import { Component } from 'react';
import PropTypes from 'prop-types';
import Motorcycle from './Motorcycle/Motorcycle';
import styles from './Motorcycles.module.css';

const propTypes = {
  motorcycles: PropTypes.array.isRequired
}
class Motorcycles extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty motocykli:</h2>
        {this.props.motorcycles.map(motorcycle => <Motorcycle key={motorcycle.id} {...motorcycle} />)}
      </div>
    );
  }
}

Motorcycles.propTypes = propTypes;

export default Motorcycles;