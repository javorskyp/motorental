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

        const res = {
          'kfkdkdkdkd': {
            name: 'Ducati'
          }
        };
          const newMotorcycle = [];
          for (const key in res ){
            newMotorcycle.push({...res, id:key});
          }
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
                <th>nazwa</th>
                <th>opcja</th>
              </thead>
              <tbody>
                
                  <tr>
                  <td>ddd</td>
                  <td>
                    <button className="btn btn-warning">Edytuj</button>
                    <button className="ml-2 btn btn-danger">Usuń</button>
                  </td>
                </tr>
               
              </tbody>
            </table>
          ) : (<p>Nie masz jeszcze żadnego motocykla</p>

          )}
          <Link to={`${url}/addj`} className="tn btn-primary">Dodaj motocykl</Link>
        </div>
      )
    }