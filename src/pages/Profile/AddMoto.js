import { useState } from 'react';
import LoadingButton from '../../components/UI/LoadingButton/LoadingButton';
import Input from '../../components/Input/Input';
import { validate } from '../../helpers/validations';


const AddMoto = props => {
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
  
    const submit = e => {
      e.preventDefault();
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  
    const changeHandler = (value, fieldName) => {
      const error = validate(form[fieldName].rules, value);
  
      setForm({
          ...form, 
          [fieldName]: {
            ...form[fieldName],
            value,
            showError: true,
            error: error
          } 
        });
    }
  
    return (
      <div className="card">
        <div className="card-header">Nowy motocykl</div>
        <div className="card-body">
          <p className="text-muted">Opis motocykla</p>
           <form onSubmit={submit}>
  
            <Input
              label="Nazwa"
              value={form.name.value}
              onChange={val => changeHandler(val, 'name')}
              error={form.name.error}
              showError={form.name.showError} />
  
            <Input
              label="Opis"
              type="textarea"
              value={form.description.value}
              onChange={val => changeHandler(val, 'description')}
              error={form.description.error}
              showError={form.description.showError} />
  
            <Input
              label="Miejscowość"
              value={form.city.value}
              onChange={val => changeHandler(val, 'city')}
              error={form.city.error}
              showError={form.city.showError} />
  
            <Input
              label="Pojemność"
              value={form.capacity.value}
              type="select"
              onChange={val => changeHandler(val, 'capacity')}
              options={[
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 },
                { value: 4, label: 4 },
              ]}
              error={form.capacity.error}
              showError={form.capacity.showError} />
  
            <h4>Wyposażenie</h4>
            <Input
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
            <Input 
              type="file" 
              onChange={val => changeHandler(val, 'image')}
              error={form.image.error}
              showError={form.image.showError} />
  
            <h4>Status</h4>
            <Input
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
  
            <div className="text-right">
              <LoadingButton 
                loading={loading} 
                className="btn-success">
                  Dodaj motocykl
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default AddMoto;