import axios from '../../../../axios';
import { useHistory } from 'react-router-dom';
import MotorcycleForm from '../MotorcycleForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const EditMoto = props => {
  const [auth] = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [motorcycle, setMotorcycle] = useState(null);

  const submit = async form => {
    await axios.patch(`/motorcycles/${id}.json?auth=${auth.token}`, form);
    history.push('/profil/motorcycles');
  }

  const fetchMoto = async () => {
    const res = await axios.get(`/motorcycles/${id}.json`);
    const motorcycleData = res.data;

    delete(motorcycleData.user_id);
    delete(motorcycleData.rating);

    setMotorcycle(motorcycleData); 
  }

  useEffect(() => {
    fetchMoto();
  }, []);

  return (
    <div className="card">
      <div className="card-header">Edytuj motorcykl</div>
      <div className="card-body">
        
        <p className="text-muted">Uzupełnij dane motocykla</p>

          <MotorcycleForm 
            motorcycle={motorcycle}
            buttonText="Zapisz!"
            onSubmit={submit}/>
          
      </div>
    </div>
  );
}

export default EditMoto;