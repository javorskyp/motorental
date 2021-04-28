import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import MotorcycleForm from './MotorcycleForm';
import useAuth from '../../hooks/useAuth';

const AddMoto = props => {
  const [auth] = useAuth();
  const history = useHistory();
    
  const submit = async form => {
    await axios.post(`/motorcycles.json?auth=${auth.token}`, form);
    history.push('/profil/motorcycles');
  }

  return (
    <div className="card">
      <div className="card-header">Dodaj motocykl</div>
        <div className="card-body">
          <p className="text-muted">Uzupełnij dane motocykla</p>
            <MotorcycleForm 
              buttonText="Dodaj motocykl"
              onSubmit={submit}/>
        </div>
      </div>
  );
}

  export default AddMoto;