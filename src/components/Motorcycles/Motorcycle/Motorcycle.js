import PropTypes from 'prop-types';
import styles from './Motorcycle.module.css';
import MotoImg from '../../../assets/images/Gsxr10002021.jpg'; 
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

function Motorcycle(props) {
  const theme = useContext(ThemeContext);
  const [auth] = useAuth();

  const clickHandler = e => {
    //e.preventDefault();
    if (props.onOpen) {
      props.onOpen(props);
    }
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
                <h5>Ocena: {props.rating ?? 0}</h5>
                  <Link 
                    onClick={clickHandler}
                    to={`/motorcycles/${props.id}`}
                    className={`btn btn-${theme.color} mt-2 px-4`}>
                    Pokaż
                  </Link>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <p className={styles.description}>
              {props.description}
            </p>
            { auth ? `${props.motorcycle} motocykle` : 'zaloguj' }
          </div>
        </div>
      </div>
    </div>
  );
}

Motorcycle.propTypes = propTypes;

export default Motorcycle;