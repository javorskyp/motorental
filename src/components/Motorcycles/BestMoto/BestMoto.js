import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BestMoto = (props) => {
    const [time, setTime] = useState('');

    const motorcycle = props.getMotorcycle();
    const endTime = moment().add(43, 'minutes').add(54, 'seconds'); 
    let interval = null;

    useEffect(() => {
        interval = setInterval(() => {
          const leftTime = -moment().diff(endTime) / 1000;
          const minutes = Math.floor(leftTime / 60);
          const seconds = Math.floor(leftTime % 60);
          setTime(`minut: ${minutes}, sekund: ${seconds}`);
        }, 1000);
    
        // componentWillUnmount()
        return () => {
          clearInterval(interval);
        }
      }, []);

    return (
        <div className="card bg-success text-white">
            <div className='card-header'>
                Najlepsza oferta
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{motorcycle.name}</h5>
                    <p>Ocena: {motorcycle.rating}</p>
                </div>
                <p>Do końca oferty pozostało: {time}</p>
                <Link to={`/motocykle/${motorcycle.id}`} className="btn btn-sm btn-light">
                    Pokaż
                </Link>
            </div>
        </div>
    );
}

export default BestMoto;