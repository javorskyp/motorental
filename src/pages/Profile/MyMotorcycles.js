import { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objectsMoto';
import useAuth from '../../hooks/useAuth';

export default function MyMotorcycles(props) {
  const [auth] = useAuth();
  const {url} = useRouteMatch();
  const [motorcycles, setMotorcycles] = useState([]);

  const fetchMotorcycles = async () => {
    try {

      const res = await axios.get('/motorcycles.json')
        const newMotorcycle = [];
        for (const key in res.data ){
          newMotorcycle.push({...res.data[key], id: key});
        }
        setMotorcycles(newMotorcycle);
      } catch (ex) {console.log(ex.response)
      }
      }

      useEffect(() => {
      fetchMotorcycles();
    }, []);

    return (
      <div>
        {motorcycles ? (
          <table className="table">
            <thead>
              <th>Nazwa</th>
              <th>Opcja</th>
            </thead>
            <tbody>
            {motorcycles.map(motorcycle => (
                <tr>
                <td>{motorcycle.name}</td>
                <td>
                  <button className="btn btn-warning">Edytuj</button>
                  <button className="ml-2 btn btn-danger">Usuń</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        ) : ( <p>Nie masz jeszcze żadnego motocykla</p>
        )}
        <Link to={`${url}/add`} className="btn btn-primary">Dodaj motocykl</Link>
      </div>
    )
  }