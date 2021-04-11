import { useState } from 'react';
import LoadingButton from '../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../helpers/validations';
import { InputTextarea } from '../../components/Inputs/InputTextarea'
import { InputCheckbox } from '../../components/Inputs/InputCheckbox';
import { InputRadio } from '../../components/Inputs/InputRadio';
import { InputFile } from '../../components/Inputs/InputFile';
import { InputText } from '../../components/Inputs/InputText';
import { InputSelect } from '../../components/Inputs/InputSelect';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AddMoto = props => {
    const auth = [useAuth]
    const history = useHistory();
    const [form, setForm] = useState({
      name: {
        value: '',
        error: '',
        showError: false,
        rules: ['required', { rule: 'min', length: 4 }]
      },
      description: {
        value: '',
        error: '',
        showError: false,
        rules: ['required', { rule: 'min', length: 10 }]
      },
      city: {
        value: '',
        error: '',
        showError: false,
        rules: ['required']
      },
      capacity: {
        value: 2,
        error: '',
        showError: false,
        rules: ['required']
      },
      features: {
        value: [],
        error: '',
        showError: false
      },
      image: {
        value: null,
        error: '',
        showError: false
      },
      status: {
        value: 0,
        error: '',
        showError: false,
        rules: ['required']
      },
    });
    const [loading, setLoading] = useState(false);
  
    const submit = async e => {
      e.preventDefault();
      setLoading(true);
  
      try {
         await axios.post('/motorcycles.json', {
          name: form.name.value,
          description: form.description.value,
          city: form.city.value,
          capacity: form.capacity.value,
          features: form.features.value,
          status: form.status.value,
          user_id: auth.user_id
        });
        history.push('/profile/motorcycles');
      } catch (ex) {
        console.log(ex.response)
      }
        setLoading(false);
    }
  
    const changeHandler = (value, fieldName) => {
      const error = validate(form[fieldName].rules, value);
  
      setForm({
          ...form, 
          [fieldName]: {
            ...form[fieldName],
            value,
            showError: true,
            error
          } 
        });
    }
  
    return (
      <div className="card">
        <div className="card-header">Nowy motocykl</div>
        <div className="card-body">
          <p className="text-muted">Opis motocykla</p>
           <form onSubmit={submit}>
  
            <InputText
              label="Nazwa"
              value={form.name.value}
              onChange={val => changeHandler(val, 'name')}
              error={form.name.error}
              showError={form.name.showError} />
  
            <InputTextarea
              label="Opis"
              type="textarea"
              value={form.description.value}
              onChange={val => changeHandler(val, 'description')}
              error={form.description.error}
              showError={form.description.showError} />
  
            <InputText
              label="Miejscowość"
              value={form.city.value}
              onChange={val => changeHandler(val, 'city')}
              error={form.city.error}
              showError={form.city.showError} />
  
            <InputSelect
              label="Pojemność"
              value={form.capacity.value}
              type="select"
              onChange={val => changeHandler(val, 'capacity')}
              options={[
                { value: 1, label: 250 },
                { value: 2, label: 500 },
                { value: 3, label: 600 },
                { value: 4, label: 1000 },
              ]}
              error={form.capacity.error}
              showError={form.capacity.showError} />
  
            <h4>Wyposażenie</h4>
            <InputCheckbox
              type="checkbox"
              value={form.features.value}
              onChange={val => changeHandler(val, 'features')}
              options={[
                { value: 'alarm', label: 'Alarm'},
                { value: 'Podgrzewane manetki', label: 'Podgrzewane manetki'},
                { value: 'ABS', label: 'ABS'},
                { value: 'Immobilizer', label: 'Immobilizer'},
                { value: 'Blokada kierownicy', label: 'Blokada kierownicy'},
                { value: 'ESP', label: 'ESP'},
                { value: 'Radio', label: 'Radio'},
                { value: 'Nawigacja', label: 'Nawigacja'},
              ]}
              error={form.features.error}
              showError={form.features.showError} />
  
            <h4>Zdjęcie</h4>
            <InputFile
              type="file" 
              onChange={val => changeHandler(val, 'image')}
              error={form.image.error}
              showError={form.image.showError} />
  
            <h4>Status</h4>
            <InputRadio
              type="radio"
              name="status"
              value={form.status.value}
              onChange={val => changeHandler(val, 'status')}
              options={[
                { value: '1', label: 'Aktywny'},
                { value: '0', label: 'Zajęty'},
              ]}
              error={form.status.error}
              showError={form.status.showError} />
  
            <div className="text-center">
              <LoadingButton loading={loading} className="btn-success" label="Dodaj motocykl"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default AddMoto;