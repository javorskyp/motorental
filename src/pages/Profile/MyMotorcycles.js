import { Link, useRouteMatch } from 'react-router-dom';

export default function MyMotorcycles(props) {
  const {url} = useRouteMatch();

    return (
        <div>
          <p>Nie masz jeszcze żadnego motocykla.</p>
        <Link to={`${url}/add`} className="btn btn-primary">Dodaj motocykl</Link>
        </div>
      );
    }