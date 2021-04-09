import { useState } from "react";
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import axios from 'axios';
import { InputText } from "../../../components/Inputs/InputText";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom'

export default function Register(props) {
  const history = useHistory();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: '',
      error: '',
      showError: false,
      rules: ['required', 'email']
    },    
    password: {
      value: '',
      error: '',
      showError: false,
      rules: ['required']
    },
  });
  const [error, setError] = useState('');
  const valid = !Object.values(form)
                    .map(input => input.error)
                    .filter(error => error)
                    .length;

  const submit = async e => {
    e.preventDefault();
    setLoading(true);

    const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyDTk6knBjnCpxswc9N1LL4YnfGHp_194yA]', {
      email: form.email.value,
      password: form.password.value,
      returnSecureToken: true
    });
    console.log(res.data)

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
      <div className="card-header">Rejestracja</div>
      <div className="card-body">
        
        <p className="text-muted">Uzupełnij dane</p>

        <form onSubmit={submit}>

          <InputText
            label="Email"
            type="email"
            value={form.email.value}
            onChange={val => changeHandler(val, 'email')}
            error={form.email.error}
            showError={form.email.showError} />

          <InputText
            label="Hasło"
            type="password"
            value={form.password.value}
            onChange={val => changeHandler(val, 'password')}
            error={form.password.error}
            showError={form.password.showError} />

          <div className="text-left">
            <LoadingButton Loading={loading} disabled={!valid} className="btn-success" label="Zarejestruj"/>
          </div>

        </form>
      </div>
    </div>
  );
}