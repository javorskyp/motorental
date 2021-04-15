import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';

function Moto(props) {
    const history = useHistory();
    const [auth] = useAuth();
    const { id } = useParams();
    const [moto, setMoto] = useState(null);
    const [loading, setLoading] = useState(true)
    const [rating, setRating] = useState(5);

    const setTitle = useWebsiteTitle();

    const fetchMoto = async () => {
        try {
            const res = await axios.get(`/motorcycles/${id}.json`);
            setMoto(res.data);
            setTitle('Motorcycle - ' + res.data.name);
          } catch (ex) {
            console.log(ex.response);
          }
          setLoading(false);
        }
      
        const rateMoto = async () => {
          try {
            await axios.put(`/motorcycles/${id}/rating.json?auth=${auth.token}`, rating);
            history.push('/');
          } catch (ex) {
            console.log(ex.response);
          }
        }

    useEffect(() => {
                fetchMoto();
    }, []);

    return loading ? <LoadingIcon /> : 
    (
        <div className="card">
          <div className="card-header">
            <h1>Motocykl: {moto.name}</h1>
          </div>
          <div className="card-body">
            <img
              src={`https://ibb.co/KWpSMPp`}
              alt=""
              className="img-fluid img-thumbnail mb-4" />
    
            <p>Miejscowość: <b>{moto.city}</b></p>
            <p>Miejsca: <b>{moto.rooms}</b></p>
            <p className="lead">{moto.description}</p>
            <p>Wyposażenie:</p>
            <ul>
              {moto.features.map(item => 
                <li key={item}>{item}</li>
              )}
            </ul>
            <h4>Ocena: {props.rating ?? 'brak ocen'}</h4>
          </div>
          <div className="card-footer">
            {auth ? (
              <div className="form-group row mt-4">
                <div className="col">
                  <select 
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    className="form-control form-select-lg mb-3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col">
                  <button className="btn btn-info" onClick={rateMoto}>Oceń</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
}

export default Moto;