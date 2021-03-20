import React from 'react';
import PropTypes from 'prop-types';
import Motorcycle from './Motorcycle/Motorcycle';
import styles from './Motorcycles.module.css';

const propTypes = {
  motorcycles: PropTypes.array.isRequired,
}
function Motorcycles(props) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty:</h2>
        {props.motorcycles.map(motorcycle => (
          <Motorcycle
            onOpen={props.onOpen}
            key={motorcycle.id} {...motorcycle} />
        ))}
      </div>
    );
};

Motorcycles.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
  return prevProps.motorcycles === nextProps.motorcycles;
}

export default React.memo(Motorcycles, areEqual);