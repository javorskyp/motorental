import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { objectToArrayWithId } from '../../helpers/objectsMoto';
import axios from '../../axios';
import Motorcycles from '../../components/Motorcycles/Motorcycles';

export default function Search(props) {
  const { term } = useParams();
  const [ motorcycles, setMotorcycles ] = useState([]);

  const search = async () => {
    try {
      const res = await axios.get('/motorcycles.json');
      const newMotorcycles = objectToArrayWithId(res.data)
                            .filter(motorcycle => motorcycle.name.includes(term));
      setMotorcycles(newMotorcycles);
    }
    catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    search();
  }, [term])

  return (
    <div>
      <h2>Wyniki dla frazy "{term}":</h2>
      <Motorcycles motorcycles={motorcycles} />
    </div>
  );
}