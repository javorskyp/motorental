import PropTypes from 'prop-types';
import styles from './Motorcycle.module.css';
import MotoImg from '../../../assets/images/Gsxr10002021.jpg'; 
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';


const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

function Motorcycle(props) {
  const theme = useContext(ThemeContext);
  const clickHandler = e => {
    e.preventDefault();
    props.onOpen(props);
  }

  return (
    <div className={`card ${styles.motorcycle}`}>
      <div className="card-body">
      
        <div className="row">
          <div className="col-4">
            <img
              src={MotoImg}
              alt=""
              className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.name}</p>
                <span className="badge badge-light">{props.city}</span>
              </div>
              <div className="col text-right">
                <h5>Ocena: {props.rating}</h5>
                  <a href="#" onClick={clickHandler} className={`btn btn-${theme.color} mt-2 px-4`}>
                    Pokaż
                  </a>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <p className={styles.description}>
              {props.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

Motorcycle.propTypes = propTypes;

export default Motorcycle;