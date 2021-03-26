import { useState, useEffect } from 'react';
import LoadingButton from '../../components/UI/LoadingButton/LoadingButton';

export default function ProfileDetails(props) {

  const [email, setEmail] = useState('javorskyp@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      //save data to backend

    setLoading(false);
    }, 500);

  }

  useEffect(() => {
    
  }, [email]);


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
      <LoadingButton Loading={loading} label="Zapisz"/>
    </form>
      );
    }
 