import { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objectsMoto';
import useAuth from '../../hooks/useAuth';

export default function MyMotorcycles(props) {
  const [auth] = useAuth();
  const {url} = useRouteMatch();
  const [motorcycles, setMotorcycles] = useState([])

  const deleteHandler = async id => {
    try {
      await axios.delete(`/motorcycles/${id}.json`);
      setMotorcycles(motorcycles.filter(x => x.id !== id));
    } catch (ex) {
      console.log(ex.response);
    }
  }

    useEffect(() => {
      const fetchMotorcycles = async () => {
        try {
          const res = await axios.get('/motorcycles.json');
          const newMotorcycles = objectToArrayWithId(res.data)
                        .filter(motorcycle =>motorcycle.userId === auth.userId);
          setMotorcycles(newMotorcycles);
        } catch (ex) {
          console.log(ex.response);
        }
      }
      fetchMotorcycles();
    }, [auth.userId]);
  

    return (
    <div>
      {motorcycles ? (
        <table className="table">
          <thead>
            <tr key={motorcycles.id}>
              <th>Nazwa</th>
              <th>Status</th>
              <th>Wyposażenie</th>
            </tr>
          </thead>
          <tbody>
            {motorcycles.map(motorcycle => (
              <tr>
                <td>{motorcycle.name}</td>
                <td>
                  {parseInt(motorcycle.status) === 1
                    ? <span className="badge bg-success text-light">aktywny</span>
                    : <span className="badge bg-secondary text-light">ukryty</span>
                  }
                </td>
                <td>
                  <Link to={`/profil/motorcycles/edit/${motorcycle.id}`} className="btn btn-warning">Edytuj</Link>
                  <button onClick={() => deleteHandler(motorcycle.id)} className="ml-2 btn btn-danger">Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nie masz jeszcze żadnego motocykla.</p>
      )}
        <Link to={`${url}/add`} className="btn btn-primary">Dodaj motocykl</Link>
        </div>
      );
    }