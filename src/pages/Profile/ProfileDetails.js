import { useState, useEffect } from 'react';
import LoadingButton from '../../components/UI/LoadingButton/LoadingButton';
import { validateEmail } from '../../helpers/validations';
import useAuth from '../../hooks/useAuth';

export default function ProfileDetails(props) {
  const [auth] = useAuth();
  const [email, setEmail] = useState(auth.email);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const buttonDisabled = Object.values(errors).filter(x => x).length;

  const submit = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      //save data to backend

    setLoading(false);
    }, 500);

  }

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({...errors, email: ''});
    } else {
      setErrors({...errors, email: 'Niepoprawny email'});
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 4 || !password) {
      setErrors({...errors, password: ''});
    } else {
      setErrors({...errors, password: 'Wymagane 4 znaki'});
    }
  }, [password]);

 

    return (
      <form onSubmit={submit}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={`form-control ${errors.email ? 'is-invalid' : 'is-valid' }`} />
        <div className="invalid-feedback">
          {errors.email} 
        </div>
        <div className="valid-feedback">
          Wszystko ok
        </div>
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={`form-control ${errors.password ? 'is-invalid' : '' }`} />
        <div className="invalid-feedback">
          {errors.password}
        </div>
      </div>
      <LoadingButton 
          loading={loading} 
          disabled={buttonDisabled}>Zapisz</LoadingButton>
    </form>
      );
    }
 