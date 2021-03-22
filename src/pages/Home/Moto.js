import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReducerContext from '../../context/reducerContext';

function Moto(props) {
    const { id } = useParams();
    const [moto, setMoto] = useState({})
    const reducer = useContext(ReducerContext);

    const fetchMoto = () => {
        


        setMoto({
                id: 1,
                name: 'Gsxr 1000',
                city: 'Warszawa',
                rating: 8.3,
                description: 'Rok 2021 pojemność 999,7 201KM 199kg',
                image: '' 
        });
        reducer.dispatch({type: 'set-loading', loading: false});
    }

    useEffect(() => {
        reducer.dispatch({type: 'set-loading', loading: true});
            setTimeout(() => {
                fetchMoto();
            }, 500);
    }, []);

    if(reducer.state.loading) return null;

    return <h1>Moto: {moto.title} </h1>
}

export default Moto;